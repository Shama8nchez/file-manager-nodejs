import fs from 'fs';
import zlib from 'zlib';

export default function decompress(args) {
  if (!args || args.split(' ').length !== 2) {
    console.log('Invalid input');
  } else {
    const rs = fs.createReadStream(args.split(' ')[0]);
    const ws = fs.createWriteStream(args.split(' ')[1], 'utf-8');
    const gzip = zlib.createBrotliDecompress();

    rs.pipe(gzip).pipe(ws);
  }
}