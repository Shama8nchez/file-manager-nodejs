import fs from 'fs';
import zlib from 'zlib';

export default function compress(args) {
  if (!args || args.split(' ').length !== 2) {
    console.log('Invalid input');
  } else {
    const rs = fs.createReadStream(args.split(' ')[0], 'utf-8');
    const ws = fs.createWriteStream(args.split(' ')[1]);
    const gzip = zlib.createBrotliCompress();

    rs.pipe(gzip).pipe(ws);
  }
}