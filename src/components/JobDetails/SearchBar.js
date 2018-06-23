import React, {Component} from 'react';
import Dropdown from "react-dropdown";

class SearchBar extends Component {
  render() {
    const { jobCategoryOptions, _onSelectJobCategory, selectedJobCategory, jobLocationOptions, _onSelectJobLocation, selectedJobLocation, _onKeyword, keyword, _onSearch } = this.props;
    return (
      <div className="banner-form banner-form-full job-list-form">
        <form action="#">
          <div className='mydropdown-div'>
            <Dropdown
              options={jobCategoryOptions}
              onChange={_onSelectJobCategory}
              value={selectedJobCategory}
              className='mydropdown'
              controlClassName='mydropdown-control'
              placeholderClassName='mydropdown-placeholder'
              menuClassName='mydropdown-menu'
              arrowClassName='mydropdown-arrow'
            />
          </div>
          <div className='mydropdown-div'>
            <Dropdown
              options={jobLocationOptions}
              onChange={_onSelectJobLocation}
              value={selectedJobLocation}
              className='mydropdown'
              controlClassName='mydropdown-control'
              placeholderClassName='mydropdown-placeholder'
              menuClassName='mydropdown-menu'
              arrowClassName='mydropdown-arrow'
            />
          </div>
          <input type="text" className="form-control" onChange={_onKeyword} value={keyword} placeholder="Type your key word" />
          <button type="submit" className="btn btn-primary" onClick={_onSearch} value="Search">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
