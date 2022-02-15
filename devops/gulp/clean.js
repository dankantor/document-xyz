import del from 'del';

const clean  = () => {
  try {
    return del([
      './build/**'
    ]);
  } catch (err) {}
}

export {clean}
