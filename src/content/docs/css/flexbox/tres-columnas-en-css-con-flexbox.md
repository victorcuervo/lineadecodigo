---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GL3DRSO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkqwY%2FTtXOj4D9yQdt0jVw0wThicD0HuLUZwtHtHyoPAiBaNg9VFuA9Re%2BAgT2EPTz91foPyxr%2BqOAgBnMBfwaXayr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMkRONA%2FCGmbW%2Bf8sJKtwDAksF2SIYNXH%2B8r2bCveD7NMM3dnJvv2z2NGiMh33MeYjXV6mphCn1WiYneIFHFxIU%2BCd%2FMs017qxROv%2F%2FclMioKVKicliQqJ4jXE6Z7sez9x4B62hBnE8oY%2FVfkfqWc6nUI2I9rY7yhfPTWGZYPOl%2FOySAJTFzIy0WqOJWDQwH%2BR1Xjtxrl%2FJ79k8ep8W2kwc535H4poC1D%2FQJBAlp0eu9iGyMtwU7RQ%2BIuEfBr7Xf2W%2BjSEyMvHN5vl%2BxQ3qTyoiiQzD3ubD3uty6ED5Aso%2BCvVf3muVPwrJnKxg0GQEvMilRIHXTJBw28sL2rMawh%2FbKC3LZfXPSbneTFyvLTGaOIUYux8sIeX49XyIveRdv%2Bw6R1%2BYES5qs9GGnPzi9GvHRU3Txv7kG0S%2BXF%2BMieXgQJB89bcEJSp2clGebWG4sqLF34Vvu7RszhmbkMex%2BA0yvZE9uEirbdZ%2FTKgjjuotjDqqNxOPT5LBUsWDzTQixQfsibwEBYObz2pv9c336HBMka4JY4lhj%2FhcYiYcgB2LVRZ6r0iL1je5P10s7s0cT81J%2FqlmRGnSznW7tuN4NrQ4LSbrKQSWCDnk5gY6aPviWNEQu3TK564CWrH1VmD%2BfG806ArDdcQ9VhlbC8wzabJyQY6pgEhv%2Fuq8rYZdFGIBNLjGb8vXznWCOyM3N9BT3wdbEtcAbWd%2BfCssfq7hmkuQJnt6RoQbMRrjJN8jPgItdAgqtYK763%2FsSfOrm8UW5upb42tMA1yPTIRBYYB8lAIB4tJaAha34HU4WWuYh1Pl%2FCaloT7zuxG5AF8t%2BtujWmKcUSgJC1p9wiPK4XXNyWwIyzgvtghQuU%2FoMmYHCyZV7k7ilrxtftK6eM6&X-Amz-Signature=3b4ac926887e44240abc1b0b04a0c54abe620a8913102bb33c06586815847773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GL3DRSO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkqwY%2FTtXOj4D9yQdt0jVw0wThicD0HuLUZwtHtHyoPAiBaNg9VFuA9Re%2BAgT2EPTz91foPyxr%2BqOAgBnMBfwaXayr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMkRONA%2FCGmbW%2Bf8sJKtwDAksF2SIYNXH%2B8r2bCveD7NMM3dnJvv2z2NGiMh33MeYjXV6mphCn1WiYneIFHFxIU%2BCd%2FMs017qxROv%2F%2FclMioKVKicliQqJ4jXE6Z7sez9x4B62hBnE8oY%2FVfkfqWc6nUI2I9rY7yhfPTWGZYPOl%2FOySAJTFzIy0WqOJWDQwH%2BR1Xjtxrl%2FJ79k8ep8W2kwc535H4poC1D%2FQJBAlp0eu9iGyMtwU7RQ%2BIuEfBr7Xf2W%2BjSEyMvHN5vl%2BxQ3qTyoiiQzD3ubD3uty6ED5Aso%2BCvVf3muVPwrJnKxg0GQEvMilRIHXTJBw28sL2rMawh%2FbKC3LZfXPSbneTFyvLTGaOIUYux8sIeX49XyIveRdv%2Bw6R1%2BYES5qs9GGnPzi9GvHRU3Txv7kG0S%2BXF%2BMieXgQJB89bcEJSp2clGebWG4sqLF34Vvu7RszhmbkMex%2BA0yvZE9uEirbdZ%2FTKgjjuotjDqqNxOPT5LBUsWDzTQixQfsibwEBYObz2pv9c336HBMka4JY4lhj%2FhcYiYcgB2LVRZ6r0iL1je5P10s7s0cT81J%2FqlmRGnSznW7tuN4NrQ4LSbrKQSWCDnk5gY6aPviWNEQu3TK564CWrH1VmD%2BfG806ArDdcQ9VhlbC8wzabJyQY6pgEhv%2Fuq8rYZdFGIBNLjGb8vXznWCOyM3N9BT3wdbEtcAbWd%2BfCssfq7hmkuQJnt6RoQbMRrjJN8jPgItdAgqtYK763%2FsSfOrm8UW5upb42tMA1yPTIRBYYB8lAIB4tJaAha34HU4WWuYh1Pl%2FCaloT7zuxG5AF8t%2BtujWmKcUSgJC1p9wiPK4XXNyWwIyzgvtghQuU%2FoMmYHCyZV7k7ilrxtftK6eM6&X-Amz-Signature=525d411ed2a101324c8e2bc177ac9d3dfc91dbc5446eda0ce8113d83d4d2cf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

