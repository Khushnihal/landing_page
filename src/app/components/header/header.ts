import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor, NgClass } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor, NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef<HTMLElement>;

  registerForm: FormGroup;
  toasts: any[] = [];

  constructor() {
    const passwordMatchValidator: ValidatorFn = (
      control: AbstractControl,
    ): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirm = control.get('confirmPassword')?.value;
      return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
    };

    this.registerForm = new FormGroup(
      {
        fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        company: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
        agreeTerms: new FormControl(false, [Validators.requiredTrue]),
      },
      { validators: passwordMatchValidator },
    );
  }

  closeMobileMenu(): void {
    if (window.innerWidth >= 992) return;

    const el = this.navbarCollapse?.nativeElement;
    if (!el) return;

    const collapseInstance = (window as any).bootstrap?.Collapse.getInstance(el);
    if (collapseInstance) {
      collapseInstance.hide();
    } else {
      const newInstance = new (window as any).bootstrap.Collapse(el, {
        toggle: false,
      });
      newInstance.hide();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (window.innerWidth >= 992) return;

    const el = this.navbarCollapse?.nativeElement;
    if (!el) return;

    const target = event.target as HTMLElement;
    const clickedInsideNavbar =
      target.closest('.navbar') !== null || target.closest('.modal') !== null;

    if (!clickedInsideNavbar) {
      const collapseInstance = (window as any).bootstrap?.Collapse.getInstance(el);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    }
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const toast = {
      title: 'Account Created',
      message: 'Welcome! Your account has been created successfully.',
      type: 'success',
      timeoutId: null as any,
      paused: false,
      remaining: 5000,
      startTime: Date.now(),
      progressWidth: 100,
    };

    this.toasts.push(toast);
    this.startToastTimer(toast);

    const modalEl = document.getElementById('registerModal');
    if (modalEl) {
      const modal =
        (window as any).bootstrap?.Modal.getInstance(modalEl) ||
        new (window as any).bootstrap.Modal(modalEl);
      modal.hide();
    }

    setTimeout(() => this.resetRegisterForm(), 200);
  }

  startToastTimer(toast: any) {
    toast.startTime = Date.now();

    const updateProgress = () => {
      if (!toast.paused) {
        const elapsed = Date.now() - toast.startTime;
        toast.progressWidth = Math.max(0, ((toast.remaining - elapsed) / 5000) * 100);
        if (elapsed >= toast.remaining) {
          this.removeToast(toast);
          return;
        }
      }
      requestAnimationFrame(updateProgress);
    };
    requestAnimationFrame(updateProgress);

    toast.timeoutId = setTimeout(() => this.removeToast(toast), toast.remaining);
  }

  pauseToast(toast: any) {
    if (!toast.paused) {
      toast.paused = true;
      clearTimeout(toast.timeoutId);
      const elapsed = Date.now() - toast.startTime;
      toast.remaining -= elapsed;
    }
  }

  resumeToast(toast: any) {
    if (toast.paused) {
      toast.paused = false;
      this.startToastTimer(toast);
    }
  }

  removeToast(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  resetRegisterForm() {
    this.registerForm.reset();
    const inputs = document.querySelectorAll<HTMLInputElement>('#registerModal input');
    inputs.forEach((input) => (input.style.backgroundColor = ''));
  }
}
