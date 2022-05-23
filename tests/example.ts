import { getPetByPetId } from "./snapshots/petstore.json.pet.local"

getPetByPetId({
  petId: 100
}).then((res) => {
  console.log(res)
})
