import Layout from "./components/Layout";
import "../styling/styling.scss";

export default function Practicalities() {
  return (
    <div className="practicalities">
      <Layout>
        <div className="content">
          <h1>Practical information</h1>
          <p>
            The registration is closed. If you want to participate, please send us
          an{" "}
            <a className="paragraphLink" href="mailto:kds@knowit.no">
              email
          </a>
            , and we will try to get you a spot.
        </p>
          <p>
            If you have questions during or before the conference, please feel
          free to contact us on Slack. We have created a slack-channel,{" "}
            <a
              className="paragraphLink"
              href="https://knowit.slack.com/archives/kds2019"
            >
              #kds2019
          </a>
            , for everything regarding the conference, join us and get the latest
          news! No account on slack? Then{" "}
            <a className="paragraphLink" href="https://knowit.slack.com/signup">
              sign up
          </a>{" "}
            first.
        </p>
          <p>
            <strong>Dinner.</strong> We will eat dinner together on Friday
            evening. More information later.
        </p>
          <p>
            <strong>Name badges</strong> will be handed out in order to make it
            easier with names and companies.
        </p>
          <p>
            <strong>Hotel check inn</strong>. You will be able to pick up your
            room key at the hotel reception sometime after 16:00 on Friday.
        </p>
          <p>
            <strong>Hotel check out</strong>. Check-out must be done before 12:00
            on Saturday.
        </p>
          <p>
            Please stay until the end on Saturday.{" "}
            <strong>All speakers deserve an audience.</strong>
          </p>
          <p>
            Be prepared to change room. We do not know how popular sessions will
            be. Perhaps we will have to switch the room just before a session
            starts. Please help us make it as smooth as possible.
        </p>
          <p>
            A speaker slot may become available last minute. Do you have a talk
            that you can present? Please prepare to quickly jump in as a speaker.
        </p>
          <p>
            We have, once again, made a cool <strong>KDS t-shirt</strong>. Please,
            just take one and note that there are different sizes for men and
            women.
        </p>
          <p>
            <strong>Share!</strong> Use hashtag <strong>#kds2019</strong> on
            twitter, blog on your company blogs and make this conference visible
            to everyone! There is lots of great content to be shared. But, please
            be careful not to share something that is marked as confidential or is
            customer related.
        </p>
        </div>
      </Layout>
    </div>
  );
}
