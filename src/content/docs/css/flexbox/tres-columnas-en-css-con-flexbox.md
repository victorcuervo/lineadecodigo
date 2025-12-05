---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVKXO5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGranpIN8ez8Nkiq4upmUw7pmt4spGsBoJ0aw9MXZ7PAIgUFbjbz6CyNoSZa8riOjS%2Ftuc2eBZvCh6RJl6yJQ8%2BXkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNHC6ibV7RZ9%2BwTe6CrcA14iWBRU040YVMbntvOW8x3a3LN5voVd61HVyxxuOBhrHz9wfcgi%2BlSE3L8hq%2BOJgPThJ8r5ixOj5exQZVujrPHUSX%2B0ox9%2B78Mu7irWZUHeekLQaRZDYwgWOBJBKvX%2FBzzGQA%2FUB4nY6aN1ezUw4iogUx1fspPh4MGyN6lR5K6uAmIpXF3aFVhmJ0BOXdjGxMia1ke%2BxbRLJCg51jsEYuEnD7wjpLzo3iiWz%2FC7W9svK8B8rjVgWQQuNLD3Zgr%2BCS4COWAI%2F%2BFl4sOypBu9RYQG9ftNW78mIt1pT71C70nDfuXGqJtuUI5%2BMiKUDtpgm6zwW%2BanNUArr5RgSqSovQnYdY0BAMRTVatpJhpEGmbSt85ljRih%2BgcNmF2eTlb1ZOQ4EQkAcAMXhEUygXy9Ki1ydizsYe8NWDF126sPK3wu7u3Xqgr63h23Ns4it%2FtQD4zKlLUK3R71EPpl9HWD8E%2BOdej4etNTPB3Q3NIqXoE518IQ0Qst04AreszZBN0FZLWvPK64RXEZbxWdcBwyQXNDkgYmfLJ47HxKamJEFVxvHb3E%2FEYf8UfXrQRhyQ%2B2bvTUtwyNDvVbauQZJj6%2BI3XmYuWGPCEHTxvol8La0PoJcRQWK6bh4K54ZNsQMIrGzckGOqUB2sMxdZSgskrTr%2BsNDCCKyjiJu2BF0H87v0fz6UQaDi5HnftjoS8jDNfI1zqXMy7bYvQvMGSaURJ9Kj4aSRT5VbLsw%2BX0qBzV75HAg34L686MQzhJdopRdIRwAstd%2F1SqxKe9wHE%2BXoImqW6is9%2F3Nec4gE4qzdbBY%2F4sQMpfbxhgOA6TCLMZlC1OCUO17UY%2BA4uiLdaMVqtuDRxaCcoiDewU7E9B&X-Amz-Signature=19e2a143b4f301882c5398365fd8cf05c8589b39d42ef672c1cb75c923b18028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVKXO5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGranpIN8ez8Nkiq4upmUw7pmt4spGsBoJ0aw9MXZ7PAIgUFbjbz6CyNoSZa8riOjS%2Ftuc2eBZvCh6RJl6yJQ8%2BXkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNHC6ibV7RZ9%2BwTe6CrcA14iWBRU040YVMbntvOW8x3a3LN5voVd61HVyxxuOBhrHz9wfcgi%2BlSE3L8hq%2BOJgPThJ8r5ixOj5exQZVujrPHUSX%2B0ox9%2B78Mu7irWZUHeekLQaRZDYwgWOBJBKvX%2FBzzGQA%2FUB4nY6aN1ezUw4iogUx1fspPh4MGyN6lR5K6uAmIpXF3aFVhmJ0BOXdjGxMia1ke%2BxbRLJCg51jsEYuEnD7wjpLzo3iiWz%2FC7W9svK8B8rjVgWQQuNLD3Zgr%2BCS4COWAI%2F%2BFl4sOypBu9RYQG9ftNW78mIt1pT71C70nDfuXGqJtuUI5%2BMiKUDtpgm6zwW%2BanNUArr5RgSqSovQnYdY0BAMRTVatpJhpEGmbSt85ljRih%2BgcNmF2eTlb1ZOQ4EQkAcAMXhEUygXy9Ki1ydizsYe8NWDF126sPK3wu7u3Xqgr63h23Ns4it%2FtQD4zKlLUK3R71EPpl9HWD8E%2BOdej4etNTPB3Q3NIqXoE518IQ0Qst04AreszZBN0FZLWvPK64RXEZbxWdcBwyQXNDkgYmfLJ47HxKamJEFVxvHb3E%2FEYf8UfXrQRhyQ%2B2bvTUtwyNDvVbauQZJj6%2BI3XmYuWGPCEHTxvol8La0PoJcRQWK6bh4K54ZNsQMIrGzckGOqUB2sMxdZSgskrTr%2BsNDCCKyjiJu2BF0H87v0fz6UQaDi5HnftjoS8jDNfI1zqXMy7bYvQvMGSaURJ9Kj4aSRT5VbLsw%2BX0qBzV75HAg34L686MQzhJdopRdIRwAstd%2F1SqxKe9wHE%2BXoImqW6is9%2F3Nec4gE4qzdbBY%2F4sQMpfbxhgOA6TCLMZlC1OCUO17UY%2BA4uiLdaMVqtuDRxaCcoiDewU7E9B&X-Amz-Signature=230a02ba469d75a1fe84869f17350fb2756f933e00a79e7adeed48da704bdd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

