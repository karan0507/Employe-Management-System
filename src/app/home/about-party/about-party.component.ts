import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-about-party',
  templateUrl: './about-party.component.html',
  styleUrls: ['./about-party.component.css']
})
export class AboutPartyComponent implements OnInit {

  partyTabs: any = [
    { id: 1, name: 'About Party' },
    { id: 2, name: 'MLA' },
    { id: 3, name: 'Members' },]

  _currLanguage: any
  globalData: any
  _currTabName: any
  votersList: any = []
  constructor(public global: GlobalService, private router: Router, private acRoute: ActivatedRoute,
    private http: HttpService) { }

  ngOnInit(): void {
    this.acRoute.queryParams.subscribe((param: any) => {
      if (param['tabSection']) {
        this._currTabName = param['tabSection']
      } else {
        this._currTabName = 0
      }
      if (this._currTabName == 2) {
        this.getVotersList()
      }
    })
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    if (this._currLanguage == 'en') {
      this.partyTabs = [
        {
          id: 1, name: 'About Party', tabTitle1: 'Party Info',
          aboutUsContext: 'Congress Party, Broadly based political party of India, founded in 1885. The Congress Party was a moderate reform party until 1917, when it was taken over by its “extremist” Home Rule wing (see Bal Gangadhar Tilak). In the 1920s and ’30s, under Mohandas K. Gandhi, it promoted noncooperation to protest the feebleness of the constitutional reforms of 1919. During World War II, the party announced that India would not support the war until granted complete independence. In 1947 an Indian independence bill became law, and in 1950 the constitution took effect. Jawaharlal Nehru dominated the party from 1951 to 1964. The Indian National Congress formed most of India’s governments from 1947 to 1996, but at the end of the 20th century, its support plummeted. After several years out of power, it returned to government in 2004.',
          tabTitle2: 'Latest Updates', tabTitle3: 'Activities'
        },
        { id: 2, name: 'MLA', subTitle1: 'About' },
        { id: 3, name: 'Members' },]
    } else {
      this.partyTabs = [
        {
          id: 1, name: 'पार्टी के बारे में', tabTitle1: 'पार्टी के बारे में',
          aboutUsContext: ' कांग्रेस पार्टी, भारत की व्यापक रूप से आधारित राजनीतिक पार्टी, जिसकी स्थापना 1885 में हुई थी। कांग्रेस पार्टी 1917 तक एक उदार सुधार पार्टी थी, जब इसे इसके "अतिवादी" होम रूल विंग (बाल गंगाधर तिलक देखें) द्वारा ले लिया गया था। 1920 और 30 के दशक में, मोहनदास के. गांधी के नेतृत्व में, इसने 1919 के संवैधानिक सुधारों की शिथिलता का विरोध करने के लिए असहयोग को बढ़ावा दिया। द्वितीय विश्व युद्ध के दौरान, पार्टी ने घोषणा की कि भारत पूर्ण स्वतंत्रता मिलने तक युद्ध का समर्थन नहीं करेगा। 1947 में एक भारतीय स्वतंत्रता विधेयक कानून बन गया, और 1950 में संविधान प्रभावी हुआ। जवाहरलाल नेहरू 1951 से 1964 तक पार्टी पर हावी रहे। भारतीय राष्ट्रीय कांग्रेस ने 1947 से 1996 तक भारत की अधिकांश सरकारों का गठन किया, लेकिन 20वीं शताब्दी के अंत में, इसका समर्थन गिर गया। कई वर्षों तक सत्ता से बाहर रहने के बाद, यह 2004 में सरकार में लौट आया।',
          tabTitle2: 'नवीनतम अपडेट', tabTitle3: 'गतिविधियाँ'
        },
        { id: 2, name: 'विधायक', subTitle1: 'के बारे में' },
        { id: 3, name: 'सदस्यों' },]
    }
    this.global.globalAccountData.subscribe((res: any) => {
      if (res) {
        this.globalData = res
      }
    })
  }

  api_call = { lst: false }
  pageIndex = 1;
  globalPageSize = 30;
  getVotersList() {
    this.api_call['list'] = true
    let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    data['page'] = this.pageIndex;
    data['limit'] = this.globalPageSize;
    this.http.getVoterList(data).subscribe((res: any) => {
      if (res.success) {
        this.votersList = res.data;
        this.api_call['list'] = false
      } else {
        this.api_call['list'] = false
      }
    },error=>{
    this.api_call['list'] = false

    })
  }

  onTabChange(data) {
    console.log(data?.index);

    this._currTabName = data?.index
    this.router.navigate([this.router.url.split('?')[0]], { queryParams: { tabSection: this._currTabName } });
  }

}
