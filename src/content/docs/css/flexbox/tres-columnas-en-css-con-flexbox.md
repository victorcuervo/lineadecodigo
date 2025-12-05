---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QEONVEJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlCprgzPuenxSm5g1aDYNrhxK%2BoWJr7UbQndkw618%2FNAiEAz76o5bcp8pVc1vUXVkVKu3p6Mfr22K8%2BJfV%2BsxeWS%2BYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKAnkLLj2A0SXG0L9CrcAzjRcd6Bmmmt4ONIEoxaONby1eHiAwUnynkzw4KK6UsgJ%2B4LsOVcTA%2FEKD8PESqqyGEgREdUgeC%2Bvr7ROa9VRLukwa0A%2B2k9w0VI%2BVQtsp67O3OrCXs%2B%2Btg6TYweTHfPHZWe5BagUQSYDpD0ZRgTCl7eC%2FDOQ7U2zIPjAGHA9BbFseNGdmHG9qm23pzyppb1VAtgGMn2M1FWcXAZZBUpHcMOPm8VLI7eXubmYaYcLASHZSIxGItE3Va%2BK3J%2FOkrqZiUxLiQMKMMV3lNpMjdrWitb70u9ZMuhv4pbE2gGP%2BcDr6JgRIJZdUl8DaUP9lJ2Hs69eUZOIFLoyTK7hXULlWanf1UUqwqWv9WZaq9xV93GOne6stqP3xILsCfjk9wz23Kd8FwzMOVbYaLlbFa2yb2IYH0d3gp5QPYlhk7zXwEH7R%2FEbPwJ3LUQ7TjfgOphtHF1M75Co2PMslMdlQlblazT4zpYNg3eQvGkEo3%2F5DSVTjBQJLP3%2BSz7EeU9YeaAkGfUvklONaYn%2FHjLOCTrff40Vcew4XI2ccVldNBQWpEuPZ1rLD%2Fmn1zchQG2d7nwRtdy%2FgjDFTCUxSyY%2Bqp2dZNzuZBtrGNcudCGU6HqHL%2By6FfaHayE7LidbQFJMOmpyckGOqUBaBnHuraF0JjOsuyfSkGUtxwymug0x10KLJN%2FomPj1OM%2BeUEZtoBXRZD87XrqWz4ndr9qM5SS8SkwXq96IqTbfe78D%2F%2FgYqf5g0WAhqjZD%2FG1gNzBpT%2FIMdAXRAlJ9PSGAoEV8CrhsxQ0TX9aTGMbhwCNwgJUmOOjczWYuApDiWCw5mVRVICkpvOT3cCcnBKNifkB3hp9uS10mnWdccBf81UFTQrD&X-Amz-Signature=6a8a3267ff8c04b0f13030c892e834c81bc27d8df05bd368e1c4a01fe6b79a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QEONVEJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlCprgzPuenxSm5g1aDYNrhxK%2BoWJr7UbQndkw618%2FNAiEAz76o5bcp8pVc1vUXVkVKu3p6Mfr22K8%2BJfV%2BsxeWS%2BYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKAnkLLj2A0SXG0L9CrcAzjRcd6Bmmmt4ONIEoxaONby1eHiAwUnynkzw4KK6UsgJ%2B4LsOVcTA%2FEKD8PESqqyGEgREdUgeC%2Bvr7ROa9VRLukwa0A%2B2k9w0VI%2BVQtsp67O3OrCXs%2B%2Btg6TYweTHfPHZWe5BagUQSYDpD0ZRgTCl7eC%2FDOQ7U2zIPjAGHA9BbFseNGdmHG9qm23pzyppb1VAtgGMn2M1FWcXAZZBUpHcMOPm8VLI7eXubmYaYcLASHZSIxGItE3Va%2BK3J%2FOkrqZiUxLiQMKMMV3lNpMjdrWitb70u9ZMuhv4pbE2gGP%2BcDr6JgRIJZdUl8DaUP9lJ2Hs69eUZOIFLoyTK7hXULlWanf1UUqwqWv9WZaq9xV93GOne6stqP3xILsCfjk9wz23Kd8FwzMOVbYaLlbFa2yb2IYH0d3gp5QPYlhk7zXwEH7R%2FEbPwJ3LUQ7TjfgOphtHF1M75Co2PMslMdlQlblazT4zpYNg3eQvGkEo3%2F5DSVTjBQJLP3%2BSz7EeU9YeaAkGfUvklONaYn%2FHjLOCTrff40Vcew4XI2ccVldNBQWpEuPZ1rLD%2Fmn1zchQG2d7nwRtdy%2FgjDFTCUxSyY%2Bqp2dZNzuZBtrGNcudCGU6HqHL%2By6FfaHayE7LidbQFJMOmpyckGOqUBaBnHuraF0JjOsuyfSkGUtxwymug0x10KLJN%2FomPj1OM%2BeUEZtoBXRZD87XrqWz4ndr9qM5SS8SkwXq96IqTbfe78D%2F%2FgYqf5g0WAhqjZD%2FG1gNzBpT%2FIMdAXRAlJ9PSGAoEV8CrhsxQ0TX9aTGMbhwCNwgJUmOOjczWYuApDiWCw5mVRVICkpvOT3cCcnBKNifkB3hp9uS10mnWdccBf81UFTQrD&X-Amz-Signature=7fae8e9b96355af8ba5622437ebe628e4858fcbce0defbd6212c92502ebcaf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

