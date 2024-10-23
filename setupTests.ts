import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll, vi } from "vitest";

vi.mock("micro_frontend_remote/FeatureOne", () => ({
  default: vi.fn(),
}));

beforeAll(() => {});

afterEach(() => {});

afterAll(() => {});
