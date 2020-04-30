import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent implements OnInit {

  @Input() bgValue: string;

  acronymName: string = null;
  colorValue: string = null;
  backgroundColorValue: string = null;
  backgroundImgValue: string = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setBackgroundValue();
  }

  ngOnInit() {
    // this.setBackgroundValue();
  }

  setBackgroundValue() {
    // console.log(this.bgValue);
    if (/\.(?:JPG|PNG|GIF|JEPG|webp)$/gi.test(this.bgValue)) {
      this.backgroundImgValue = `url('${this.bgValue}')`;
    } else {
      const valueCleaned = this.bgValue.substring(0, this.bgValue.search(/(?:@|\s|$)/));
      const color = `#${this.intToRGB(this.hashCode(valueCleaned))}`;
      this.acronymName = valueCleaned.substring(0, 2).toUpperCase();
      this.colorValue = `${color}99`;
      this.backgroundColorValue = `${color}1f`;
    }
  }

  hashCode(str) { // java String#hashCode
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB(i) {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }

}
