### A simple movie app using skeleton component

- expo-cli, react-navigation
- consuming public REST APIs with Axios

# Skeleton Component

Display 'mockups' of text, images or other content elements, while data is being loaded.

## Props

it can be customized by passing these props.

|           | necessary | types                      | default   |
| --------- | --------- | -------------------------- | --------- |
| shape     |           | "text" , "circle" , "rect" | `"text"`  |
| width     |           | number, string             |           |
| height    |           | number, string             |           |
| color     |           | string                     | `#e7e7e7` |
| animation |           | boolean                    | `true`    |
| isLoading |           | boolean                    | `true`    |
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

## State detection

```
const [isLoading, setIsLoading] = useState(true);

return (
    ...

    <Skeleton isLoading={isLoading}>
        <View>{props.data}</View>
    </Skeleton>

    ...
)

```

If the state becomes false, it will show the children component.

```
{
  isLoading
    ? <Skeleton shape="rect" width={200} height={100}/>
    : <View>{props.data}</View>
}
```

You can also use it like this
