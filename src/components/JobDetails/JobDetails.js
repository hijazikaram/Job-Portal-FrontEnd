import React, {Component} from 'react';
import Footer from '.././properties/Footer';
import ApplyModal from './ApplyModal';
import SearchBar from './SearchBar';
import JobAd from './JobAd';
import JobDescription from './JobDescription';
import axios from 'axios';
import config from '../../config';
import '../../css/MyDropdown.css';
import { Redirect } from 'react-router';
class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job : config.job,
      postedDays : config.postedDays,
      modal: config.applyModal,
      applyjob : config.applyToJob,
      toJobList : config.toJobList,
      jobCategoryOptions : config.jobCategoryOptions,
      jobLocationOptions : config.jobLocationOptions,
      selectedJobCategory : config.selectedJobCategory,
      selectedJobLocation : config.selectedJobLocation,
      keyword : config.keyword
    }
  }

  componentWillMount() {
    let self = this;
    let job_id = self.props.match.params.job_id;

    axios.get('http://localhost:5000/api/job/' + job_id ).then((job) => {
      self.setState({ job : job.data });
      let created = new Date(job.data.created_at);
      let now = new Date();
      let postedDays = parseInt((now - created) / (1000 * 60 * 60 * 24), 10);
      self.setState({applyjob : (postedDays <= 30 && postedDays >= 0)});
      if (postedDays === 0) {
        postedDays = "Today";
      } else if (postedDays === 1){
        postedDays = "Yesterday";
        // postedDays = postedDays.toString() + " day ago";
      } else {
        postedDays = postedDays.toString() + " days ago";
      }
      self.setState({ postedDays : postedDays });

      axios.get('http://localhost:5000/api/job_search_options').then((job_search_options) => {
        self.setState({ jobCategoryOptions : job_search_options.data.jobCategoryOptions, jobLocationOptions : job_search_options.data.jobLocationOptions });
      });
    });
  }
  formatData = (string) => {
    if (string) {
      const date = new Date(string);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return monthNames[monthIndex] + ' ' + day + ', ' + year;
    }
  }
  _onSelectJobCategory(selectedJobCategory) {
    this.setState({selectedJobCategory : selectedJobCategory.value === "none"?"Job Category":selectedJobCategory.value});
  }
  _onSelectJobLocation = (selectedJobLocation) => {
    this.setState({selectedJobLocation : selectedJobLocation.value === "none"?"Job Location":selectedJobLocation.value});
  }
  _onKeyword = (event) => {
    this.setState({keyword:event.target.value});
  }
  _onSearch = (event) => {
    this.setState({toJobList:true});
  }
  _onModalToggle = () => {
    const checkAuthToApply = localStorage.getItem('user_id') ? this.setState({modal: !this.state.modal}) : window.location.href = '/SignUp'; 
  }
  render() {
    if (this.state.toJobList) {
      return (
        <Redirect to={{
          pathname: '/JobList',
          state: { selectedJobCategory_param: this.state.selectedJobCategory,
            selectedJobLocation_param: this.state.selectedJobLocation, keyword_param: this.state.keyword }
        }} />
      );
    }

    return (<div>
      <section className="job-bg page job-list-page">
        <div className="container">

          <SearchBar jobCategoryOptions={this.state.jobCategoryOptions} _onSelectJobCategory={this._onSelectJobCategory} selectedJobCategory={this.state.selectedJobCategory} jobLocationOptions={this.state.jobLocationOptions} _onSelectJobLocation={this._onSelectJobLocation} selectedJobLocation={this.state.selectedJobLocation} _onKeyword={this._onKeyword} keyword={this.state.keyword} _onSearch={this._onSearch}/>

          <div className="category-info">
            <div className="job-details">

              <JobAd job={this.state.job} applyjob={this.state.applyjob} _onModalToggle={this._onModalToggle} formatData={this.formatData} job_logo={this.state.job_logo}/>

              <JobDescription job={this.state.job} postedDays={this.state.postedDays}/>
            </div>
          </div>
        </div>
      </section>

      <ApplyModal modal={this.state.modal} _onModalToggle={this._onModalToggle} job={this.state.job}/>

      <Footer/>
    </div>);
  }
}

export default JobDetails;
