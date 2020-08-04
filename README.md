
- expo-cli, react-navigation
- consuming public REST APIs with axios

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

```js
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

```js
<Skeleton>
   <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
</Skeleton>
```

```js
<Skeleton>
   <Child />
</Skeleton>
```

## State detection by isLoading prop

```js
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


```js
{
  isLoading
    ? <Skeleton shape="rect" width={200} height={100}/>
    : <View>{props.data}</View>
}
```

Of course, You can also use it like this
