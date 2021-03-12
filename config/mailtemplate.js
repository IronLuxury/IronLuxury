module.exports.generateTemplate = ( email, token) => {
  return `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>

        </title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }
        </style>
        <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->

      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
        </style>
      <!--<![endif]-->



    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>


        <style type="text/css">



    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }

        </style>


      </head>
      <body style="word-spacing:normal;background-color:#c3ccd1;">


      <div style="background-color:#c3ccd1;">


      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tbody>
          <tr>
            <td style="vertical-align:top;padding:0px;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
        <tbody>

              <tr>
                <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:600px;">

      <img alt="header image" height="auto" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">

            </td>
          </tr>
        </tbody>
      </table>

                </td>
              </tr>

        </tbody>
      </table>

            </td>
          </tr>
        </tbody>
      </table>

      </div>

          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->


      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px;padding-bottom:20px;padding-top:10px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tbody>
          <tr>
            <td style="vertical-align:top;padding:0px;">

      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
        <tbody>

              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">

      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#512d0b;"><strong>Hey ${email}</strong></div>
    
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:0 25px;word-break:break-word;">
                  
      <div style="font-family:Arial;font-size:18px;line-height:1;text-align:center;color:#000000;">Welcome to the IronLuxury Team</div>
    
                </td>
              </tr>
            
              <tr>
                <td align="center" style="font-size:0px;padding:0 25px;padding-top:20px;word-break:break-word;">
                  
      <div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;line-height:30px;text-align:center;color:#489BDA;">Click on the following button to activate your account<br>
          </div>
    
                </td>
              </tr>
            
              <tr>
                <td align="center" vertical-align="middle" style="font-size:0px;padding:20px 0 0 0;word-break:break-word;">
                  
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
        <tr>
          <td align="center" bgcolor="#f48403" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#f48403;" valign="middle">
            <a href="${process.env.HOST || `http://localhost:${process.env.PORT || 3000}`}activate/${token}" style="display: inline-block; background: #f48403; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; line-height: 120%; margin: 0; text-transform: none; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 3px; text-decoration: none; color: inherit;" target="_blank">
              Active your account
            </a>
          </td>
        </tr>
      </table>

                </td>
              </tr>

              <tr>
                <td align="center" style="font-size:0px;padding:0 25px;padding-top:40px;word-break:break-word;">

      <div style="font-family:Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#000000;">Best, <br> The IronLuxury Team
          <p></p></div>

                </td>
              </tr>

        </tbody>
      </table>

            </td>
          </tr>
        </tbody>
      </table>

      </div>

          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>

      </div>


      <!--[if mso | IE]></td></tr></table><![endif]-->


      </div>

      </body>
    </html>
  `
}