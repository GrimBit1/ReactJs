import React, { Component } from "react";

export default class CountryList extends Component {
  render() {
    return (
      <datalist id={this.props.id} className={this.props.className}>
        <option value="ae">United Arab Emirates</option>
        <option value="ar">Argentina</option>
        <option value="at">Austria</option>
        <option value="au">Australia</option>
        <option value="be">Belgium</option>
        <option value="bg">Bulgaria</option>
        <option value="br">Brazil</option>
        <option value="ca">Canada</option>
        <option value="ch">Switzerland</option>
        <option value="cn">China</option>
        <option value="co">Colombia</option>
        <option value="cu">Cuba</option>
        <option value="cz">Czechia</option>
        <option value="de">German</option>
        <option value="eg">Egypt</option>
        <option value="fr">France</option>
        <option value="gb">United Kingdom</option>
        <option value="gr">Greece</option>
        <option value="hk">Hong Kong</option>
        <option value="hu">Hungary</option>
        <option value="id">Indonesia</option>
        <option value="ie">Ireland</option>
        <option value="il">Israel</option>
        <option value="in">India</option>
        <option value="it">Italy</option>
        <option value="jp">Japan</option>
        <option value="kr">South Korea</option>
        <option value="lt">Lithuania</option>
        <option value="lv">Latvia</option>
        <option value="ma">Morocco</option>
        <option value="mx">Mexico</option>
        <option value="my">Malaysia</option>
        <option value="ng">Nigeria</option>
        <option value="nl">Netherlands</option>
        <option value="no">Norway</option>
        <option value="nz">New Zealand</option>
        <option value="ph">Philippines</option>
        <option value="pl">Poland</option>
        <option value="pt">Portugal</option>
        <option value="ro">Romania</option>
        <option value="rs">Serbia</option>
        <option value="ru">Russia</option>
        <option value="sa">Saudi Arabia</option>
        <option value="se">Sweden</option>
        <option value="sg">Singapore</option>
        <option value="si">Slovenia</option>
        <option value="sk">Slovakia</option>
        <option value="th">Thailand</option>
        <option value="tr">Türkiye</option>
        <option value="tw">Taiwan</option>
        <option value="ua">Ukraine</option>
        <option value="us">United States</option>
        <option value="ve">Venezuela</option>
        <option value="za">South Africa</option>
      </datalist>
    );
  }
}
