import { getPetByPetId } from "./snapshots/petstore.json.pet.local"
import { getApiContentArticle_categoryList } from "./snapshots/bbc.content"

getPetByPetId({
  petId: 100
}).then((res) => {
  console.log(res)
})

getApiContentArticle_categoryList({
  level: 1
}).then((res) => {
  return res.map(value => {
    console.log(value.level)
  })
})
