import type { Product } from '../types/product.ts';
export declare const ProductService: {
    getAll(category?: string): Promise<Product[]>;
    getById(id: number): Promise<Product>;
    create(product: Omit<Product, 'id'>): Promise<Product>;
    update(id: number, product: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
};
//# sourceMappingURL=api.d.ts.map