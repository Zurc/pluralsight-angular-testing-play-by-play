import { AppComponent } from './app.component';

describe('App component', () => {
	it('should add 1 + 1', () => {
		expect(1 + 1).toEqual(2);
	});

	it('should have a component', () => {
		const component = new AppComponent();
		expect(component).toBeTruthy();
	});

	it('should have a title of app', () => {
		const component = new AppComponent();
		expect(component.title).toBe('app');
	});
});

// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
// });
