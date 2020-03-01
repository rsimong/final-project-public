import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
    this.setBackgroundValue();
  }

  setBackgroundValue() {
    console.log(this.bgValue);
    if (/\.(?:JPG|PNG|GIF|JEPG|webp)$/gi.test(this.bgValue)) {
      this.backgroundImgValue = `url('${this.bgValue}')`;
    } else {
      const valueCleaned = this.bgValue.substring(0, this.bgValue.indexOf("@"));
      const color = `#${this.intToRGB(this.hashCode(valueCleaned))}`;
      this.acronymName = valueCleaned.substring(0, 1).toUpperCase();
      this.colorValue = `${color}99`;
      this.backgroundColorValue = `${color}12`;
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
