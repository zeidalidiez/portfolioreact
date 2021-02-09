import React from "react"
 
function Articles(props) {
  return (
    <div className="articleDiv">
  <h2>Contact Me</h2>
        <div class="formspring">
<form action="https://formspree.io/xvowelzl" method="POST">
  <label>
    Your email:
    <input class="widemessage" type="text" name="_replyto">
  </label>

  <label>
    Your message:

    <textarea class="widemessage" name="message" style="height: 50px">Enter your message here</textarea>
  </label>

  <br>
  <input class="submitButton" type="submit" value="Send">
</form>
    </div>
  )
}
 
export default Articles;