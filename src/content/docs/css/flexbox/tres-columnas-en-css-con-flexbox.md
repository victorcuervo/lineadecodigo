---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3APDXMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfowgxoCuMTPqJwTt953Z4CgF3xhWq4cVNw5y4381lBAiBkc%2BKb1cpGLXY3gaawepNznwQ7v9UMpObnDImX%2BJUJVCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMit2TgMGu%2FYBFnqxpKtwDw3Jmkkc8Afo5LKexFwKM9grVTue2fzySYo62Lzr%2FC9KfLJgCNQ%2F3BUMRBM8zg0mxC650gV6mmVxo%2BXaKHARb22C4yPghBs29fkfoyx%2F8LD5mNrKUX65MGs28zc47Br8fbhZLk9bcYTY9rhsTgdHTu6MRjsVnDkYqRp2JUPyFuHAsGMKe97PBCcxProjE49v0PRRF93Ok1hTjnBANz3DXOux28HUMp8wT0ToVQ7%2BNsc3UyfqlPlUB8aYS%2FnAgXHmco1%2BZvdrCGd4BfAQP%2BA2uWLb9DEhfP12v3K4vPEgJ0VI97jB5j9%2BcUnzzJnyivvO6cuELzXKcG6dpOHQZAnjOSEIT1%2B6rmq6zKZrVZbYmbyLUjHPdw5kSbJY1ul4qDZ9KU%2BUuz9nqw2%2FUotcnVNvlft9zuhoC6CKiKeB63Lql%2FB6xo%2BmX4X6iG%2FNS5AFPVnmLiJSRjdkrhCE3k5E8E3zXG%2F5T3FSAkqSu8QgRZWx8WtTz3PGmEXPROwabFIqHADVz68Cahnd2KM789mZtkFIKtX%2FO%2Fg93mteChNHGTkkHTbB09yCcLZW4LZW1bxtHWYq4WGZO06xqP2ueA1tAxShDGEvMLKxAc7GpCUeVGD8zoSrLcVclERIQBT%2Bn5tgwu4rQyQY6pgHmd5cSCDxrTW9gh6QoR3S5G19dS6W71BMtuzWee8frJK6Bo7awJwdPFqwO94EW61VuJC1iFkI4lFQj%2FuWrmQu9a4SMhSt9OXUdDaUUmqI1YFisHGI8RWp6Xwb0x18eTZ9isVszWRuhP5iVUC4bWDgOhTDiZcFwq%2FgUboceerA8AgD786KTv6jN2JWArE5rUz5dJLo1Ph2TUrCpMpiF4Bs369ikjzeJ&X-Amz-Signature=cf12711f83d50a026e4c14361a59917c9d993f523d079d4cfacecc8545a6c3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3APDXMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfowgxoCuMTPqJwTt953Z4CgF3xhWq4cVNw5y4381lBAiBkc%2BKb1cpGLXY3gaawepNznwQ7v9UMpObnDImX%2BJUJVCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMit2TgMGu%2FYBFnqxpKtwDw3Jmkkc8Afo5LKexFwKM9grVTue2fzySYo62Lzr%2FC9KfLJgCNQ%2F3BUMRBM8zg0mxC650gV6mmVxo%2BXaKHARb22C4yPghBs29fkfoyx%2F8LD5mNrKUX65MGs28zc47Br8fbhZLk9bcYTY9rhsTgdHTu6MRjsVnDkYqRp2JUPyFuHAsGMKe97PBCcxProjE49v0PRRF93Ok1hTjnBANz3DXOux28HUMp8wT0ToVQ7%2BNsc3UyfqlPlUB8aYS%2FnAgXHmco1%2BZvdrCGd4BfAQP%2BA2uWLb9DEhfP12v3K4vPEgJ0VI97jB5j9%2BcUnzzJnyivvO6cuELzXKcG6dpOHQZAnjOSEIT1%2B6rmq6zKZrVZbYmbyLUjHPdw5kSbJY1ul4qDZ9KU%2BUuz9nqw2%2FUotcnVNvlft9zuhoC6CKiKeB63Lql%2FB6xo%2BmX4X6iG%2FNS5AFPVnmLiJSRjdkrhCE3k5E8E3zXG%2F5T3FSAkqSu8QgRZWx8WtTz3PGmEXPROwabFIqHADVz68Cahnd2KM789mZtkFIKtX%2FO%2Fg93mteChNHGTkkHTbB09yCcLZW4LZW1bxtHWYq4WGZO06xqP2ueA1tAxShDGEvMLKxAc7GpCUeVGD8zoSrLcVclERIQBT%2Bn5tgwu4rQyQY6pgHmd5cSCDxrTW9gh6QoR3S5G19dS6W71BMtuzWee8frJK6Bo7awJwdPFqwO94EW61VuJC1iFkI4lFQj%2FuWrmQu9a4SMhSt9OXUdDaUUmqI1YFisHGI8RWp6Xwb0x18eTZ9isVszWRuhP5iVUC4bWDgOhTDiZcFwq%2FgUboceerA8AgD786KTv6jN2JWArE5rUz5dJLo1Ph2TUrCpMpiF4Bs369ikjzeJ&X-Amz-Signature=b372a6239aea10fe6c157590d79bb3978439f930304d5141d8adf987f3273e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

