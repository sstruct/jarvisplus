import { TypescriptNameNormalizer } from "./typescriptNameNormalizer"

describe("TypescriptNameNormalizer", () => {
  test("it should return correct values when use dashes", () => {
    const normalizer = new TypescriptNameNormalizer()

    expect(normalizer.normalize("get-testing-dashes")).toBe(
      "get_testing_dashes"
    )
  })

  test("it should split words by slash", () => {
    const normalizer = new TypescriptNameNormalizer()

    expect(normalizer.normalize("get-project/tasks")).toBe("get_projectTasks")
  })

  test("it should replace path params", () => {
    const normalizer = new TypescriptNameNormalizer()

    expect(normalizer.normalize("get-/project/{id}")).toBe("get_ProjectById")

    expect(normalizer.normalize("get-/project/{id}/tasks")).toBe(
      "get_ProjectByIdTasks"
    )
  })

  test("it ignores last slash", () => {
    const normalizer = new TypescriptNameNormalizer()

    expect(normalizer.normalize("get/project/")).toBe("getProject")

    expect(normalizer.normalize("get-/project/{id}/tasks/")).toBe(
      "get_ProjectByIdTasks"
    )
  })
})
