# Reactshoppe

Running [FullStory](https://www.fullstory.com/) in a React + Redux + TypeScript application.

![image](https://user-images.githubusercontent.com/45576380/79674280-775c0280-81af-11ea-835e-48b6313ab357.png)

Reactshoppe uses [Create React App](https://create-react-app.dev/docs/adding-typescript/). FullStory is installed with the [Browser SDK on NPM](https://www.npmjs.com/package/@fullstory/browser).

## Setup

- You'll need to have [node.js](https://nodejs.org/) installed on your machine and you'll need a [FullStory account](https://www.fullstory.com/plans/).
- Once you've cloned this repo, `cd` into the root of the project (the same directory with the `package.json` file).
- Run `npm install`
- Copy the .env_sample file to .env and update the `REACT_APP_FULLSTORY_ORG` with your FullStory Org Id. Find out how to get your Org Id [here](https://help.fullstory.com/hc/en-us/articles/360047075853).

## Getting Started

Run either `npm start` or `yarn start` to start up Reactshoppe on your machine (most likely running at `http://localhost:3000/`). FullStory will start recording right away. You can [login to your account](https://app.fullstory.com/login/) and look for your session. Sometimes it might take a minute for your very first session to show up.

## Go Shoppe-ing

Reactshoppe is a very simple fake ecommerce site. You can add products to your cart from the product grid, edit your shoppe-ing cart, and checkout. No data is transacted and no products are purchased. This is all for fun.

## Privacy Controls

During replay, you'll notice that the checkout form has billing and payment fields blocked.

![FullStory privacy controls](https://user-images.githubusercontent.com/45576380/79687608-80cc8580-8216-11ea-9692-f6cddabe8547.png)

These are FullStory's privacy controls in action. Learn more about how privacy controls work [here](https://help.fullstory.com/hc/en-us/articles/360020623574-How-do-I-exclude-elements-to-protect-my-users-privacy-in-FullStory-).

## Bonus Features

Every Redux action is logged to the FullStory console using the [FS.log() function](https://developer.fullstory.com/logging). You can view the action sequence in the [FullStory Console](https://help.fullstory.com/hc/en-us/articles/360020828533-How-do-I-use-the-FullStory-Console-) during replay to help troubleshoot any issues that might be related to data flow:

- Actions running out of sequence
- Actions not occuring at all

![Reactshoppe record Redux actions](https://user-images.githubusercontent.com/45576380/79687621-98a40980-8216-11ea-9877-6dbbfb45eec5.png)

This uses the `recordAction` [middleware](https://github.com/fullstorydev/react-shoppe-demo/blob/master/src/store/recordAction.ts) included in the source code.
