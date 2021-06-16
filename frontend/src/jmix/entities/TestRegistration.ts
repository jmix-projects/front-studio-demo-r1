export class TestRegistration {
  static NAME = "TestRegistration";
  id?: string;
  name?: string | null;
  description?: string | null;
}
export type TestRegistrationViewName = "_base" | "_instance_name" | "_local";
export type TestRegistrationView<
  V extends TestRegistrationViewName
> = V extends "_base"
  ? Pick<TestRegistration, "id" | "name" | "description">
  : V extends "_instance_name"
  ? Pick<TestRegistration, "id" | "name">
  : V extends "_local"
  ? Pick<TestRegistration, "id" | "name" | "description">
  : never;
