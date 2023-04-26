import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  distwiseDate: any
  day_count_dist_assm: any
  gs_wise_seaarch: any
  spDataList: any = []
  candidateLists: any = [
    { name: 'District', dataList: [], searchValue: '', api_call_loader: false },
    { name: 'Assembly', dataList: [], searchValue: '', api_call_loader: false },
  ]
  day_count: any
  report_type: any;
  date: any
  gsDataList: any = []
  api_call_Loader = {
    'card': false,
    'listGS': false,
    'listDistrict': false,
    'listAssembly': false,

  }
  api_call_loader = {
    'cardLoader3': false
  }
  candidatePerformance: any
  exportData: any
  assemblyExport: any
  districtExport: any
  searchValue: any
  current_district: any
  constructor(private http: HttpService, private message: NzMessageService, public global: GlobalService) { }

  ngOnInit(): void {
    this.getSPVotes()
    this.getDistrictWiseData()
    this.getAssemblyData()
    this.getGSCandidate()
  }

  getSPVotes() {
    this.api_call_loader['cardLoader3'] = true
    this.http.getSPVotes().subscribe((res: any) => {
      if (res?.success) {
        
        this.spDataList = res?.data
        this.api_call_loader['cardLoader3'] = false
      }else{
        this.api_call_loader['cardLoader3'] = false
      }
    })
  }

  numberWithCommas(data) {
    return data.toString().split('.')[0].length > 3 ? data.toString().substring(0, data.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + data.toString().substring(data.toString().split('.')[0].length - 3) : data.toString();
}

  getDistrictWiseData(type?) {
    if (type == 'District') {
      this.api_call_Loader['listDistrict'] = true
    } else {
      this.candidateLists[0]['api_call_loader'] = true
    }
    this.http.getDistrictWiseData().subscribe((res: any) => {
      if (res?.success) {
        // this.candidateLists[0]['dataList'] = res?.data
        this.candidateLists[0]['dataList'] = res?.data
        if (type == 'District') {
          this.api_call_Loader['listDistrict'] = false
        } else {
          this.candidateLists[0]['api_call_loader'] = false
        }

      } else {
        if (type == 'District') {
          this.api_call_Loader['listDistrict'] = false
        } else {
          this.candidateLists[0]['api_call_loader'] = false
        }
      }
    })
  }

  getAssemblyData(type?) {
    if (type !== 'Assembly') {
      this.candidateLists[1]['api_call_loader'] = true
    } else {
      this.api_call_Loader['listAssembly'] = true
    }
    let data = {}
    if (this.current_district) {
      data['district'] = this.current_district
    }
    this.http.getAssemblyDashboard(data).subscribe((res: any) => {
      if (res?.success) {
        this.candidateLists[1]['dataList'] = res?.data
        if (type == 'Assembly') {
          this.api_call_Loader['listAssembly'] = false
        } else {
          this.candidateLists[1]['api_call_loader'] = false
        }
      } else {
        if (type == 'Assembly') {
          this.api_call_Loader['listAssembly'] = false
        } else {
          this.candidateLists[1]['api_call_loader'] = false
        }
      }
    }, error => {
      if (type == 'Assembly') {
        this.api_call_Loader['listAssembly'] = false
      } else {
        this.candidateLists[1]['api_call_loader'] = false
      }
    })

  }

  getGSCandidate(type?) {
    if (type !== 'tableLoader') {
      this.api_call_Loader['card'] = true
    } else {
      this.api_call_Loader['listGS'] = true
    }
    this.http.getGSCandidateData().subscribe((res: any) => {
      if (res?.success) {
        this.gsDataList = res?.data
        if (type !== 'tableLoader') {
          this.api_call_Loader['card'] = false
        } else {
          this.api_call_Loader['listGS'] = false
        }
      } else {
        if (type !== 'tableLoader') {
          this.api_call_Loader['card'] = false
        } else {
          this.api_call_Loader['listGS'] = false
        }
      }
    })
  }


  reset() {
    this.searchValue = null;
    this.getGSCandidate('tableLoader')
  }

  resetFilter(i) {
    if (i == 1) {
      this.candidateLists[1]['searchValue'] = null
      this.getAssemblyData('Assembly')
    } else if (i == 0) {
      this.candidateLists[0]['searchValue'] = null
      this.getDistrictWiseData('District')
    } else if (i == 'sp') {
      this.gs_wise_seaarch = null
    }
  }

  storeTempData(data?, type?) {
    if (type == 'District') {
      this.districtExport = []
      this.districtExport = data
      return data
    } else if (type == 'Assembly') {
      this.assemblyExport = []
      this.assemblyExport = data
      return data
    } else {
      this.exportData = []
      this.exportData = data
      return data
    }
  }

  generateCandidateDataset(data, type, search_value) {
    var final_dataset = []
    for (var i in data) {
      // if (!data[i]['name'].includes(search_value)) {
      //   continue
      // }
      for (var j in data[i]['candidate_dataset']) {
        data[i]['candidate_dataset'][j][type + '_name'] = data[i]['name']
        data[i]['candidate_dataset'][j][type + '_vote_count'] = data[i]['vote_count']
        final_dataset.push(data[i]['candidate_dataset'][j])
      }
    }
    this.exportData = []
    // console.log(data, final_dataset);

    this.global.exportTableData(final_dataset, type, 'something')

    // console.log(final_dataset)
    // console.log(data);

  }


  // resetMasterExportFilters() { }
}

