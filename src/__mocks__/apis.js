export default {
  get: jest.fn().mockResolvedValue(
    { data: {} }
  ),
  create: jest.fn().mockResolvedValue()
};