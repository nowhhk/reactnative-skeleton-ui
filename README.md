# Skeleton
Display 'mockups' of text, images or other content elements, while data is being loaded. 


## Props
you can customize component's style and dimension by passing these props.

|                      | necessary | types                        | default |
| -------------------- | --------- | ---------------------------- | ------- |
| variant              |           | "text" , "circle" , "rect"   |`"text"` |
| width                |           | number, string               |`300`    |
| height               |           | number, string               |`"1em"`  |
| color                |           | string                       |`#e7e7e7`|
| animation            |           | boolean                      | `true`  |
| style                |           | ViewStyle                    |         |
| children             |           | ReactNode                    |         |

## Example of using skeleton-component

```{
  loading ? (
    <Skeleton variant="rect" width={200} height={10} />
  ) : (
    <View>{props.content}</View>
  );
}
 ```
