import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';
import { COMMON_DIRECTIVES } from '@angular/common/src/directives';

describe('VoterComponent', () => {
let component: VoterComponent;
let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    fixture.detectChanges();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);
  });

  it('should hightlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();


    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();

  });

  it('should increase total votes when I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
    
  })
});
