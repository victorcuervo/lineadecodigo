---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SX62IC3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD3DKVTbzjEu7to7PaJqlaqq8sLjFp8KtSc8%2Fb6fbkkiAIgXs5HHEFy9SD%2BNTlczWAQSAD1ItuXC6hmNEi9dnuE514q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLdjdCmUB6hRbA3xWircA50nhLSc2bzrTIWDTpz0tRgkNOqPOawCnpTSF79kpvN%2FcUMheGEpsCN8gmg1HZK4Nm8XCQdlCv9P4brSJ08S4H1kaT52Vy8mN6ecChc39MGer56YcbFxUl6GBlyrdWucZVYUS8EPhoc28waamu5RRhNzHE%2FFARyvO1vdZEnjAki7l2VqrHRFwHzkalq%2Boy7mOIsiLxHu3Lx40MrERTGG%2F8G01E60I33eafhd%2FS7%2BoQIsDO8WEjAr%2BQz8j7ct95fdlov25t7RyPOMGYONwOdGcO2x%2FyEavyztUjn1ciDpX58v018YXZn5Nsdd653LMXBt4WOe39x8bUY%2BEQM3VmTTvNREGYL59dNi1IR2sRY4nl%2FStZe94YqiIvvEC95J5ILgG%2BYJJFegfPI%2Bu5sGxnhAAKxDCOjq7V4%2BzyUHGE72LrETeeaFaeTqJCaMnBzj2fKH7Mt8H18UsHXHyel8WydumR6odCr4sWKhK%2BoSj6bhz0D%2F2ftZO2KuCXgUAenZXu%2FoW9Og%2B3sILo79alduYRUV1SiniB5tqoWuMgtuKU8ksqbatUpf3RKtHfFifExsxbRaCUR7ZxJhv5IMkeDjekxsrgcy4gnEokabzb9wP6ElhxML%2Bz0wFUIzqI8aqEJBMKTnxckGOqUB4QMPUGX9LxOI%2FFAgwI77OXqR11gg%2BfiCPedeDfuXhmU4mNhRsc%2FA62SPXRccj9J0cpkwssAezZLCtOEzIVlcuErZYYPZiIVtPiyWXr0HkMUdDg15HaL%2FNhhe%2Begj1ijqEDiRwyqJjPCkn5wI%2Fn9ZB031yPr2ZGJFPqwmgbSaYogThows7MmsrYRQBvQhdPEFuZbWUE6UTB3PM2P8Tt23Jjwwpn92&X-Amz-Signature=a30064e693b836f488380531ac80380b092384316a17e065910a184f536a9cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SX62IC3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD3DKVTbzjEu7to7PaJqlaqq8sLjFp8KtSc8%2Fb6fbkkiAIgXs5HHEFy9SD%2BNTlczWAQSAD1ItuXC6hmNEi9dnuE514q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLdjdCmUB6hRbA3xWircA50nhLSc2bzrTIWDTpz0tRgkNOqPOawCnpTSF79kpvN%2FcUMheGEpsCN8gmg1HZK4Nm8XCQdlCv9P4brSJ08S4H1kaT52Vy8mN6ecChc39MGer56YcbFxUl6GBlyrdWucZVYUS8EPhoc28waamu5RRhNzHE%2FFARyvO1vdZEnjAki7l2VqrHRFwHzkalq%2Boy7mOIsiLxHu3Lx40MrERTGG%2F8G01E60I33eafhd%2FS7%2BoQIsDO8WEjAr%2BQz8j7ct95fdlov25t7RyPOMGYONwOdGcO2x%2FyEavyztUjn1ciDpX58v018YXZn5Nsdd653LMXBt4WOe39x8bUY%2BEQM3VmTTvNREGYL59dNi1IR2sRY4nl%2FStZe94YqiIvvEC95J5ILgG%2BYJJFegfPI%2Bu5sGxnhAAKxDCOjq7V4%2BzyUHGE72LrETeeaFaeTqJCaMnBzj2fKH7Mt8H18UsHXHyel8WydumR6odCr4sWKhK%2BoSj6bhz0D%2F2ftZO2KuCXgUAenZXu%2FoW9Og%2B3sILo79alduYRUV1SiniB5tqoWuMgtuKU8ksqbatUpf3RKtHfFifExsxbRaCUR7ZxJhv5IMkeDjekxsrgcy4gnEokabzb9wP6ElhxML%2Bz0wFUIzqI8aqEJBMKTnxckGOqUB4QMPUGX9LxOI%2FFAgwI77OXqR11gg%2BfiCPedeDfuXhmU4mNhRsc%2FA62SPXRccj9J0cpkwssAezZLCtOEzIVlcuErZYYPZiIVtPiyWXr0HkMUdDg15HaL%2FNhhe%2Begj1ijqEDiRwyqJjPCkn5wI%2Fn9ZB031yPr2ZGJFPqwmgbSaYogThows7MmsrYRQBvQhdPEFuZbWUE6UTB3PM2P8Tt23Jjwwpn92&X-Amz-Signature=c209e22cea670101959162730171f1ad06d60a0a3fc6509bc9506145cbc20e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

