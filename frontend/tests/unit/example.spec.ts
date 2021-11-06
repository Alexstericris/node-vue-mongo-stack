import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Unsplash from "@/services/unsplash";

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('unsplash', () => {
  it('test api', () => {

    const unsplash = new Unsplash();

    expect(unsplash.testFetch()).toBeTruthy()
  })
})
