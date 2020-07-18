# Skeleton

Display 'mockups' of text, images or other content elements, while data is being loaded.

## Props

it can be customized by passing these props.

|           | necessary | types                      | default   |
| --------- | --------- | -------------------------- | --------- |
| shape     |           | "text" , "circle" , "rect" | `"text"`  |
| width     |           | number, string             | `"100%"`  |
| height    |           | number, string             | `12`      |
| color     |           | string                     | `#e7e7e7` |
| animation |           | boolean                    | `true`    |
| style     |           | ViewStyle                  |           |
| children  |           | ReactElement               |           |

## Usage

```
<Skeleton
    shape="circle"
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
  loading
    ? <Skeleton shape="rect" width={200} height={100}/>
    : <View>{props.data}</View>
}
```

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
