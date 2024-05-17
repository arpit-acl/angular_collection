import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Collections'
  isParentAccess : boolean;
  termsProp = '';
  categoryList = ['All', 'Chat-Applications', 'E Commerce', 'CMS', 'Admin Panel'];
  collectionList = [
    {
      imageSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/parallax-pre.jpg',
      dataCategory: ['Chat-Applications', 'E Commerce', 'CMS'],
      name: 'Chat Application With Angular Node with Nest And MQTT',
    }
  ]

  selectedCategory: string
  observer : any;
  constructor(private elementRef: ElementRef) {
    this.isParentAccess = true;
    this.selectedCategory = 'All'
      // Your code here
    
    // later, you can stop observing
    // observer.disconnect();

  }
  ngBeforeViewInit(): void {

    // this.observer = new MutationObserver(function (mutations) {
    //   console.log('props received')
    //   mutations.forEach(function (mutation) {
    //     console.log(mutation.type);
    //   });
    // });

    // // pass in the target node, as well as the observer options
    // this.observer.observe(document.querySelector('#parent'), { attributes: true, childList: true, characterData: true });
 }
 ngAfterViewInit() {
    const targetElement = this.elementRef.nativeElement.querySelector('#parent');
    console.log(targetElement);
    const observer = new MutationObserver(mutationsList => {
      console.log('fnc cllaed');
        for (const mutation of mutationsList) {
            // if (mutation.type === 'childList' && mutation.target === targetElement) {
                // Call your function when inner HTML changes
                this.checker();
                this.elementRef.nativeElement.querySelector('.prope').addEventListener('click', this.checker.bind(this));
            // }
        }
    });
  
    observer.observe(targetElement, { childList: true, subtree: true });
  
    this.setProoperty();  
}
  ngOnInit(): void {


    
 
  }

  setProoperty() {
    this.termsProp = '<a id="id" class="prope" ">Terms and cond</a>';
  }

  // window.addEventListener('load', function () {
    
   
  // });
  checker() {
    console.log('checker function called');
  }
  updateSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}
