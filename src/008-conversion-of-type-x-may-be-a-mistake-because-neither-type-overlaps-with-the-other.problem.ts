interface Dog {
  bark: boolean;
}

let cat = { purr: true };

// Same as unknown, its dangerous
let dog = cat as any as Dog;

// Unsafe, forcing it to be a dog
let dog1 = cat as unknown as Dog;
