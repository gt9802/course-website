import { courseState } from "../atoms/course";
import { selector } from "recoil";





export const priceState = selector({
    key: 'priceState',
    get: ({get}) => {
      const state = get(courseState);
      if(state.course){
        return state.course.price;
      }
      return ""
    },
});




export const titleState = selector({
      key: 'titleState',
      get: ({get}) => {
        const state = get(courseState);
        if(state.course){
          return state.course.title;
        }
        return ""
        
      },
}); 

export const descriptionState = selector({
  key: 'descriptionState',
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
      return state.course.description
    }
      
    return ""
  },
});

export const imageLinkState = selector({
  key: 'imageLinkState',
  get: ({get}) => {
    const state = get(courseState);
    if(state.course){
      return state.course.imageLink
    }
      
    return ""
  },
});

export const isLoadingState= selector({
  key: 'isLoadingState',
  get: ({get}) => {
    const state = get(courseState);
    return state.isLoading;
  },
});

export const courseDetail = selector({
  key: 'courseDetail',
  get: ({get}) => {
    const state = get(courseState);
    return state.course;
  },
});
