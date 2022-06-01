import { TypescriptNameNormalizer } from "./typescriptNameNormalizer"

describe("TypescriptNameNormalizer", () => {
  test("it should return correct values when use dashes with camelCase", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "camelCase",
    })

    expect(normalizer.normalize("get-testing-dashes")).toBe("getTestingDashes")
  })

  test("it should return correct values when use dashes with PascalCase", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "PascalCase",
    })

    expect(normalizer.normalize("get-testing-dashes")).toBe("GetTestingDashes")
  })

  test("it should return correct values when use dashes with snake_case", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "snake_case",
    })

    expect(normalizer.normalize("get-testing-dashes")).toBe(
      "get_testing_dashes"
    )
  })

  test("it should return correct values when use dashes with legacy", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "legacy",
    })

    expect(normalizer.normalizeRequestName("post", "post-testing-dashes")).toBe(
      "createpost_testing_dashes"
    )
  })

  test("it should return correct values when use dashes", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "camelSnake_case",
    })

    expect(normalizer.normalize("get-testing-dashes")).toBe(
      "get_testing_dashes"
    )
  })

  test("it should split words by slash", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "camelSnake_case",
    })

    expect(normalizer.normalize("get-project/tasks")).toBe("get_projectTasks")
  })

  test("it should replace path params", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "camelSnake_case",
    })

    expect(normalizer.normalize("get-/project/{id}")).toBe("get_ProjectById")

    expect(normalizer.normalize("get-/project/{id}/tasks")).toBe(
      "get_ProjectByIdTasks"
    )
  })

  test("it ignores last slash", () => {
    const normalizer = new TypescriptNameNormalizer({
      nameConvention: "camelSnake_case",
    })

    expect(normalizer.normalize("get/project/")).toBe("getProject")

    expect(normalizer.normalize("get-/project/{id}/tasks/")).toBe(
      "get_ProjectByIdTasks"
    )
  })
})
