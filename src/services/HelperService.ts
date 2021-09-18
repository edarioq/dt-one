class HelperService {
  roundPrice(value: string | number): string {
    return parseFloat(value.toString()).toFixed(2);
  }

  formatPrice(value: number) {
    const val = (value / 1).toFixed(2).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}

export default new HelperService();
