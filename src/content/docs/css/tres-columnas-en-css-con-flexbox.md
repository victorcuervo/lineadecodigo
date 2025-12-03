---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMWGNLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIF6ALX0vXZn7eaX5ibdK%2BM88fEzPceENye95uim2xUg%2FAiAOfe7%2BKvvhmaXaME9DrFcFTQ1UHZX%2FbZsU2mHHV1PYmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqRxsWG%2FX7QumgR7lKtwDuU2j3HgsRcZ2Qx3DBDIzKHMv5WZG1W%2BPCPgUS7RmmwXE9ANVCd7iubBCDolFUENIyI1sz%2FC1250FvJO4fwvQ7xkdz5jzAqmYyxYEYKsRXNlq4EC4gmUEZuLQg1F9kFmVkFjfLQipwvHi7psPOc4HDI4%2FNvdYqCn7GuSDLx8xlz8HzOPEm1No10Zc5QgZ4uW577bgQ0jfef2ubxak7CDYGvq59Ux8WkogvrWKRpwyXQ%2Bj1noCrTxGwX%2BH0JBS5hHtDrTMPaPDt9wMgt1avmUJMjnatugOaw21BDOFz%2FUN8g8oUZ7e7bLql5tNm1rtlG3jd2Qxp774AdjoJ500Bal2nimFXwN%2FWhiIuDBiNf8fhBjXx8Q9fKvPfKa%2BkYNPnZXcWDlzhGyQgn6hCs%2FUBUDSTq7VqgvHStesQc3JKDJV54KHm9mPwjb%2Be5tZCHcl7K9D4%2F8iGgC0a3mX91lQH2IXPJzbDG3oMwnmTnNQMPdyRWqbgHj7sf8wbPFfFwEYuManxZYn%2BVRXW1hA2rWN9L9WJOrCt3ve5kNg2fJzpRTRlugJiqpJsuZ77BwwHdAj4mhhg82%2FYwdPY1QSJ6b0DDOyzcO4NTXMuJ66LY%2BFg4mLkg7KIUna33iYU%2Bh8Pwgwi5HCyQY6pgGnbHAK0n%2BPYvyybDgtkk85LJSTIxUSfTqSIhTAYBGUbD0pIdHafIeUTV6tS40%2FZemZvr8%2FlyYUeErKucZkArUc6Fi814b3m14w77GTW4hvdArMciJWRQeGBzLqaSXPUeGPibnDZlCFf5gdu1pVeaee6x%2BrNNSyase5Pc8rd3HNIg0HG4RwDuuv950V7QaJocwcueKWzXn5BbWcqoJtSn2t87lO9LD9&X-Amz-Signature=395772710ed60867efc895e530196c411efefb93347ff8e6d5e4b43ea59d8062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMWGNLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIF6ALX0vXZn7eaX5ibdK%2BM88fEzPceENye95uim2xUg%2FAiAOfe7%2BKvvhmaXaME9DrFcFTQ1UHZX%2FbZsU2mHHV1PYmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMqRxsWG%2FX7QumgR7lKtwDuU2j3HgsRcZ2Qx3DBDIzKHMv5WZG1W%2BPCPgUS7RmmwXE9ANVCd7iubBCDolFUENIyI1sz%2FC1250FvJO4fwvQ7xkdz5jzAqmYyxYEYKsRXNlq4EC4gmUEZuLQg1F9kFmVkFjfLQipwvHi7psPOc4HDI4%2FNvdYqCn7GuSDLx8xlz8HzOPEm1No10Zc5QgZ4uW577bgQ0jfef2ubxak7CDYGvq59Ux8WkogvrWKRpwyXQ%2Bj1noCrTxGwX%2BH0JBS5hHtDrTMPaPDt9wMgt1avmUJMjnatugOaw21BDOFz%2FUN8g8oUZ7e7bLql5tNm1rtlG3jd2Qxp774AdjoJ500Bal2nimFXwN%2FWhiIuDBiNf8fhBjXx8Q9fKvPfKa%2BkYNPnZXcWDlzhGyQgn6hCs%2FUBUDSTq7VqgvHStesQc3JKDJV54KHm9mPwjb%2Be5tZCHcl7K9D4%2F8iGgC0a3mX91lQH2IXPJzbDG3oMwnmTnNQMPdyRWqbgHj7sf8wbPFfFwEYuManxZYn%2BVRXW1hA2rWN9L9WJOrCt3ve5kNg2fJzpRTRlugJiqpJsuZ77BwwHdAj4mhhg82%2FYwdPY1QSJ6b0DDOyzcO4NTXMuJ66LY%2BFg4mLkg7KIUna33iYU%2Bh8Pwgwi5HCyQY6pgGnbHAK0n%2BPYvyybDgtkk85LJSTIxUSfTqSIhTAYBGUbD0pIdHafIeUTV6tS40%2FZemZvr8%2FlyYUeErKucZkArUc6Fi814b3m14w77GTW4hvdArMciJWRQeGBzLqaSXPUeGPibnDZlCFf5gdu1pVeaee6x%2BrNNSyase5Pc8rd3HNIg0HG4RwDuuv950V7QaJocwcueKWzXn5BbWcqoJtSn2t87lO9LD9&X-Amz-Signature=3a37b18a4674fef2669313d023b44120110f0c13465c03263eebfd92ff17746f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

