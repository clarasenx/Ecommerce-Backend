CREATE TABLE IF NOT EXISTS public.users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT
);

CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  NAME TEXT NOT NULL,
  PRICE_IN_CENTS INTEGER NOT NULL,
  SIZE TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS public.purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_date DATE NOT NULL,
  user_id UUID,
  delivery_adress TEXT NOT NULL,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        references users(id)
);

CREATE TABLE IF NOT EXISTS public.purchaseproduct (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_id UUID REFERENCES purchases(id) NOT NULL,
  product_id UUID REFERENCES products(id) NOT NULL,
  product_amount INTEGER NOT NULL
);