---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSGNPXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoeBgItYhGuwMVjzuNAjWtUygclo9l8OpNd6QaRpmx9AiBQHfPdW4waElbnJIC833aGrMfs0JLoN%2BxljCNhdIhouSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxkdOLFqrk2rAyfogKtwDGY15J39pkwlrtxUFenU3NdugC1VtC8gOTcRZuAw%2F78L0kkyRa4x6AEDPBXuyzDoucUxYZSTe%2FC82Xn8XiIui460EgqVPCVCOhUk6Avn5LSGmPGc6szjQGyJl2E3W9qZNYH8VZILLW%2F8qLveWGj89STUV6j%2BCzyciWnpmUwwR7Eb4nVCyemy9mwRppeCM2jcRB9DNouTUR2WErDf%2BowqYtByT3VTvd%2FZz3f96AONdYQ6G8fwO4CjKf76vcQrIdW3mT2DO%2BwQvRRwLz%2BYL6gRtSHdCs3OhPTIY5enuvi4hwa%2Bmpmw3uKpj1yIcjzNAhRfol%2Ff5GBStNRh9PFppp5HvHqZVvcThidmn65uR7ritOutP9f%2B%2BEtWdZzU4zhRwpRVEGitSPCD8QBHpbaIB1G549tV1i5imOAHEUKibe59gb5h8UqxU45043NFE97Eepcpg8NIkGNfp6ANsxyGDCDtPyoJeHt6Rs9P50bli1FznUpyLUc2lBNkL59nQYiNHi1S1hwDT%2BhQeAyt0ciiPqaYbkBXhX7JDN7m6D5ofj0ceu5SIUe2uBeZkTww0HSxalvLNDkzVgKovvMlK7dlqo%2BKc5SYwOgrNsWiyt7w64tZTZx1xE8jUKVpRi56FhvwwzabQyQY6pgGinQfebYKyMNrDU6%2BdXlpA1PgMqGvKC3Tsvb29Dm3wghRUHje4FZsykkHtkzxsmQ7LdcgfRU6zxhYK6XneDY47ocJRFYyegtjH0lILuMnE0EleRZ5ZjMrCjYscTWsynr1Q4Twhu7f01uhVcSsaNeDvBx7eNzHyQAyyjPHw6wOmoGT%2F2fVXZDxTtCnImTfEnS0OVToBwJ%2FuDDOCnqitsXbPakcejWfV&X-Amz-Signature=3b89a826c2b5b7baa0c9fba5c58ba192b89031f739e16f8863c862b5be3483f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSGNPXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoeBgItYhGuwMVjzuNAjWtUygclo9l8OpNd6QaRpmx9AiBQHfPdW4waElbnJIC833aGrMfs0JLoN%2BxljCNhdIhouSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxkdOLFqrk2rAyfogKtwDGY15J39pkwlrtxUFenU3NdugC1VtC8gOTcRZuAw%2F78L0kkyRa4x6AEDPBXuyzDoucUxYZSTe%2FC82Xn8XiIui460EgqVPCVCOhUk6Avn5LSGmPGc6szjQGyJl2E3W9qZNYH8VZILLW%2F8qLveWGj89STUV6j%2BCzyciWnpmUwwR7Eb4nVCyemy9mwRppeCM2jcRB9DNouTUR2WErDf%2BowqYtByT3VTvd%2FZz3f96AONdYQ6G8fwO4CjKf76vcQrIdW3mT2DO%2BwQvRRwLz%2BYL6gRtSHdCs3OhPTIY5enuvi4hwa%2Bmpmw3uKpj1yIcjzNAhRfol%2Ff5GBStNRh9PFppp5HvHqZVvcThidmn65uR7ritOutP9f%2B%2BEtWdZzU4zhRwpRVEGitSPCD8QBHpbaIB1G549tV1i5imOAHEUKibe59gb5h8UqxU45043NFE97Eepcpg8NIkGNfp6ANsxyGDCDtPyoJeHt6Rs9P50bli1FznUpyLUc2lBNkL59nQYiNHi1S1hwDT%2BhQeAyt0ciiPqaYbkBXhX7JDN7m6D5ofj0ceu5SIUe2uBeZkTww0HSxalvLNDkzVgKovvMlK7dlqo%2BKc5SYwOgrNsWiyt7w64tZTZx1xE8jUKVpRi56FhvwwzabQyQY6pgGinQfebYKyMNrDU6%2BdXlpA1PgMqGvKC3Tsvb29Dm3wghRUHje4FZsykkHtkzxsmQ7LdcgfRU6zxhYK6XneDY47ocJRFYyegtjH0lILuMnE0EleRZ5ZjMrCjYscTWsynr1Q4Twhu7f01uhVcSsaNeDvBx7eNzHyQAyyjPHw6wOmoGT%2F2fVXZDxTtCnImTfEnS0OVToBwJ%2FuDDOCnqitsXbPakcejWfV&X-Amz-Signature=1c2837eb81b95e3b6b23502cba3b19f186fbad0d6bd2c4f5009352593c38fa71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

