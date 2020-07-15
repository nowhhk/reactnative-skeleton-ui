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

## Usage

```
<Skeleton
        variant="circle"
        width={40}
        height={40}
        color="lightgray"
        animation={false}
        style={{ marginBottom: 30 }}
      />
```

## Example of Using Skeleton 

```
{
  loading ? (
    <Skeleton variant="rect" width={200} height={100}/>
  ) : (
    <View>{props.content}</View>
  );
}
 ```
**It will display the Skeleton until the loading state becomes false.
 
 
## Inferring dimensions

If you pass a component between Skeleton as children, it will infer its width and height from them.

```
<Skeleton>
   <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
</Skeleton>
```

```
<Skeleton>
   <Child />
</Skeleton>
```
**Its height and width will be equal to the children component's those.




