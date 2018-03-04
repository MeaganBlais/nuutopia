import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Card from "antd/lib/card";
import Icon from "antd/lib/icon";
import List from "antd/lib/list";
import message from "antd/lib/message";

class TaskBoard extends Component {

  render() {

  function handleClick(e) {
    e.preventDefault();
    
    message.info("Job has been accepted!");

// Initiate transaction

let walletId =
  "c4f7818c2670da13f8e8651cbd8821b5cd5508259b080366e03865d231456ad4";
let amount = Math.ceil(Math.random() * 10);
let communityAddress =
  "ef7cc1f30c1515a1306cdd93b63e3d1f7890fe26d55db7458f55ce4c5dbd9d66";
let user1 = "50c2c488233dee2356e8da6b89709aacc30d3423808d156003c92375e8d53457";
let user2 = "23ba997d47943fd02ca7c77d9895c4c67985884410e05af076ab361dfdadd2fa";

fetch(
  "https://missionhack-coin.herokuapp.com/operator/wallets/" + walletId + "/transactions",
  {
    body:
      '{  "fromAddress": "' + communityAddress + '", "toAddress": "' + user2+ '", "amount": ' + amount + ', "changeAddress": "' + communityAddress + '" }',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "password": "dead camp team build solution"
    },
    method: "POST"
  }
).then(function() {
  
// Finalize transaction (mine)
    fetch("https://missionhack-coin.herokuapp.com/miner/mine", {
      body:
        '{ "rewardAddress": "ef7cc1f30c1515a1306cdd93b63e3d1f7890fe26d55db7458f55ce4c5dbd9d66" }',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST"
    });
});

    document.querySelector('.job-accepted').play();
  }  

      const data = [{ title: "Title 1" }, { title: "Title 2" }, { title: "Title 3" }, { title: "Title 4" }, { title: "Title 5" }, { title: "Title 6" }];

    return <div className="taskboardSection">
        <Header />
        <audio class="job-accepted">
          <source src="job-accepted.mp3" />
        </audio>

        <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }} dataSource={data} renderItem={item => <List.Item>
              <Card title={item.title} extra={<a href="#" onClick={handleClick}>
                    Accept Job&nbsp;<Icon type="check-circle" />
                  </a>} style={{ width: 300 }}>
                <p>Details: 6 hectres of crops need to be cultivated.</p>
                <p>
                  <Icon type="home" />&nbsp; Jupiter Farms, Sector 5B
                </p>
              </Card>
            </List.Item>} />
      </div>;
  }
}

export default TaskBoard;
