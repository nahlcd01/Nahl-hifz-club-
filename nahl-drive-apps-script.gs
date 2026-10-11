/**
 * NAHL Hifz Club — Google Drive upload door
 * 1. drive.google.com > New folder > NAHL Recitations (keep private)
 * 2. Copy the folder ID from the URL
 * 3. Paste it below
 * 4. Deploy > New deployment > Web app
 *    Execute as: Me
 *    Who has access: Anyone
 * 5. Copy the web app URL into the site config
 */
const FOLDER_ID = 'PASTE_DRIVE_FOLDER_ID';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const bytes = Utilities.base64Decode(body.data);
    const blob = Utilities.newBlob(bytes, body.mime || 'video/webm', body.name || 'recitation.webm');
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return json({
      ok: true,
      id: file.getId(),
      url: 'https://drive.google.com/file/d/' + file.getId() + '/view',
      name: file.getName()
    });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, service: 'nahl-drive' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
