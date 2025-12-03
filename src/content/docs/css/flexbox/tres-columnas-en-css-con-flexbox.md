---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5A2O7S4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIG%2Fr3blB3fTS7EdbPjD2fK3suaNA6KMJ78r0QBZ2I4S8AiEA4qULnwpM61Ofr19coEpzVV3WC2fpdoRzfPr3%2BcNshAIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDG%2FOUmtIefkoXoX9sCrcA%2FC8ACzXLLGYQHC8G32ly9YlfZHKCbdOpKqAJI6Ro4tzRImxMNqdH4AF1oH40aakB0Qd74KrDbGfc%2BVehBKBJUKTM7t0r4JK0FBhnyV6WQ0AJgXN4G8Ygurakndf9aw%2B6Oh6bw6HUdZ0M2R%2BRqTlE%2BKMFYhRNrh04W4S7UyCXtobkhCcGOSpjhBpRLbRJEqQe%2Fs%2B%2F2fcq%2Fgm%2BY7N8dv9LcFKv1XzQhu15QskA7NHHSdxiJ0rUfnJEDLz4k3%2F3ar%2FD4f9bkkw78yRuTHjBXFT24UhlM7VWgDrORrsJVw4iYBlFsNsmPuEIPrLAaoVk%2BSA0PIUL%2BxRocVVugh73aerdwJisfxzXIlhojQGraJy4G4UygRmVVtXxxUVJ21wt8yuiZhRpSb2dsmxOz9lYru70NKAP%2BvEZNOrCi9RiX2m0ejfRctJvwXx%2B6tbZskXZyJVhWELojkz3185%2Bj8P8TIsSt2SvauXJcPyDIXfSNZTEOMugrV9ShKOb%2F0SDstwWbNKBC6hOblrRWTQiPwN8gj%2BIvg%2F8gHngG%2Fm6in1zRyjHEfQ19QxV8VDIgaTnglcYzK7LPQ%2F01Ism5T3Dje4doyDX7gWAyJ7UJ6VLQBO26Vx9GD7YaVQu0YdG4qeUbxSMJOVw8kGOqUBmkWqXDeQX0jV4%2Fvt8QavWDipH27t%2BpvPPeZuNuJCBptjQr80jyqKbFYiPetHUzTf4WsUSlYxW1ryzf0MVQbBvln%2FZSdSp2%2BkQWGyUFt5W4aOG4HnJySK4NvNH4m2Ed8rtQfIjGIhe4ELs6%2BtGJlpL2W5BjyX3uJtkLxI4E%2BZEPuh9bmLSGxhkrTb5Plrtk%2B231qlk67GMKzb0dSeZ%2BJUimesTQJn&X-Amz-Signature=902a651fdb7d4a6016ba047e25277e8a951a487332b9a1f2368fe59609df0174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5A2O7S4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIG%2Fr3blB3fTS7EdbPjD2fK3suaNA6KMJ78r0QBZ2I4S8AiEA4qULnwpM61Ofr19coEpzVV3WC2fpdoRzfPr3%2BcNshAIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDG%2FOUmtIefkoXoX9sCrcA%2FC8ACzXLLGYQHC8G32ly9YlfZHKCbdOpKqAJI6Ro4tzRImxMNqdH4AF1oH40aakB0Qd74KrDbGfc%2BVehBKBJUKTM7t0r4JK0FBhnyV6WQ0AJgXN4G8Ygurakndf9aw%2B6Oh6bw6HUdZ0M2R%2BRqTlE%2BKMFYhRNrh04W4S7UyCXtobkhCcGOSpjhBpRLbRJEqQe%2Fs%2B%2F2fcq%2Fgm%2BY7N8dv9LcFKv1XzQhu15QskA7NHHSdxiJ0rUfnJEDLz4k3%2F3ar%2FD4f9bkkw78yRuTHjBXFT24UhlM7VWgDrORrsJVw4iYBlFsNsmPuEIPrLAaoVk%2BSA0PIUL%2BxRocVVugh73aerdwJisfxzXIlhojQGraJy4G4UygRmVVtXxxUVJ21wt8yuiZhRpSb2dsmxOz9lYru70NKAP%2BvEZNOrCi9RiX2m0ejfRctJvwXx%2B6tbZskXZyJVhWELojkz3185%2Bj8P8TIsSt2SvauXJcPyDIXfSNZTEOMugrV9ShKOb%2F0SDstwWbNKBC6hOblrRWTQiPwN8gj%2BIvg%2F8gHngG%2Fm6in1zRyjHEfQ19QxV8VDIgaTnglcYzK7LPQ%2F01Ism5T3Dje4doyDX7gWAyJ7UJ6VLQBO26Vx9GD7YaVQu0YdG4qeUbxSMJOVw8kGOqUBmkWqXDeQX0jV4%2Fvt8QavWDipH27t%2BpvPPeZuNuJCBptjQr80jyqKbFYiPetHUzTf4WsUSlYxW1ryzf0MVQbBvln%2FZSdSp2%2BkQWGyUFt5W4aOG4HnJySK4NvNH4m2Ed8rtQfIjGIhe4ELs6%2BtGJlpL2W5BjyX3uJtkLxI4E%2BZEPuh9bmLSGxhkrTb5Plrtk%2B231qlk67GMKzb0dSeZ%2BJUimesTQJn&X-Amz-Signature=123a6e1677a60a5ca337494aa83efe3018b130ac46dc692e812ce39e05848a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

