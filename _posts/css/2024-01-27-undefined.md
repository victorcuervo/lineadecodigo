---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTG32JM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCNutLGCfaLTR5PAmvdpqkMy1X%2Ff94aMQHhO5FBuFPi1gIhAMLYBL8IK1dxkt6GHEovXhRJ75w86OJHWoVuqzysoGWMKv8DCCIQABoMNjM3NDIzMTgzODA1IgzQXle7sgNId3cfmDUq3AM%2BvVgYCWPz%2B6%2FzAkZUIOxWHw3GYYJ2hzjNrWjAiiWFElYiL2o%2F%2Bt%2F14Y%2B4PgwSyI9YgKehFcM9A8Yr%2FjsMA8V6P0Qzz4zB0t6pwhP41YW6b4gD3mma2zQNhdDDhPrIXgG2X%2ByTe0ZqntPTuj3t6cauMpjoq9rSjnxnAjzRCmz7uB0TLI7zJ4BTEPdIZHk3sgcVO4RWtwvyVCdE1l6byc5Ve%2F4s22Zy0qYI7waAOTIg7Yhyt1VImNxgorb%2BfCh%2BIcQo%2Feg3YyPmhSlMHgiHSGKIvIrrIxwdrPqNHtJaTA7QbPPbWd6fbHGmmVfudBorVmc1X%2BXVWu8vsh3GfL3Me%2BjYxac48HQ4OPQi1PtE8blzWmg9N2X149uVx4KaJvMfJP1dMtwgZlfKcgpif9Amjo6pQDc8CFsVz9FXhuoYo2uCtHq1C3W71M3mzW7COYKfe3XnTLSAWWxtqKtqXSk1BnuzFXfWF%2BWI6GRueAqk1YkAJiQwYgk%2BXMs9M%2FJBnhj9iHCsTTxqlVPsppRkVlk6s7KdReY92it5yyzAH1QGjk5sbPeVhoA3ECXHM3AblkNwPBECzUjzfmSmrQJ9Iai0O%2FMHMJUh79Wo8K%2BDYI0zd7B%2BoSMAsRcwjLvA%2BhEXlDDtlr7JBjqkAUwt9%2Bxe3aVYpkiL%2F1P6Bt8FlPN7eFy2IBd1sQSu8dt3vVurmaMI2EGSfdQFFhzgfo1wLFCr5ATTGuK8XGRkgSivKm%2FkNHXx3ZRfNFlnXdYT24jMAYy%2Bj1wikw7QAjPloZG2cMFJhnC8h%2FilaiUajDdSIwt9cBbWqROg740PoiwFb%2Fu%2Bm%2B9crpAzDNWV9y%2FhleNm4v%2F7y4cU4LF99VeygGstUCmW&X-Amz-Signature=e6a8a7ac18c61f95e007c01140a85d3dec51069a2ff8d487d1847c0d18919835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTG32JM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCNutLGCfaLTR5PAmvdpqkMy1X%2Ff94aMQHhO5FBuFPi1gIhAMLYBL8IK1dxkt6GHEovXhRJ75w86OJHWoVuqzysoGWMKv8DCCIQABoMNjM3NDIzMTgzODA1IgzQXle7sgNId3cfmDUq3AM%2BvVgYCWPz%2B6%2FzAkZUIOxWHw3GYYJ2hzjNrWjAiiWFElYiL2o%2F%2Bt%2F14Y%2B4PgwSyI9YgKehFcM9A8Yr%2FjsMA8V6P0Qzz4zB0t6pwhP41YW6b4gD3mma2zQNhdDDhPrIXgG2X%2ByTe0ZqntPTuj3t6cauMpjoq9rSjnxnAjzRCmz7uB0TLI7zJ4BTEPdIZHk3sgcVO4RWtwvyVCdE1l6byc5Ve%2F4s22Zy0qYI7waAOTIg7Yhyt1VImNxgorb%2BfCh%2BIcQo%2Feg3YyPmhSlMHgiHSGKIvIrrIxwdrPqNHtJaTA7QbPPbWd6fbHGmmVfudBorVmc1X%2BXVWu8vsh3GfL3Me%2BjYxac48HQ4OPQi1PtE8blzWmg9N2X149uVx4KaJvMfJP1dMtwgZlfKcgpif9Amjo6pQDc8CFsVz9FXhuoYo2uCtHq1C3W71M3mzW7COYKfe3XnTLSAWWxtqKtqXSk1BnuzFXfWF%2BWI6GRueAqk1YkAJiQwYgk%2BXMs9M%2FJBnhj9iHCsTTxqlVPsppRkVlk6s7KdReY92it5yyzAH1QGjk5sbPeVhoA3ECXHM3AblkNwPBECzUjzfmSmrQJ9Iai0O%2FMHMJUh79Wo8K%2BDYI0zd7B%2BoSMAsRcwjLvA%2BhEXlDDtlr7JBjqkAUwt9%2Bxe3aVYpkiL%2F1P6Bt8FlPN7eFy2IBd1sQSu8dt3vVurmaMI2EGSfdQFFhzgfo1wLFCr5ATTGuK8XGRkgSivKm%2FkNHXx3ZRfNFlnXdYT24jMAYy%2Bj1wikw7QAjPloZG2cMFJhnC8h%2FilaiUajDdSIwt9cBbWqROg740PoiwFb%2Fu%2Bm%2B9crpAzDNWV9y%2FhleNm4v%2F7y4cU4LF99VeygGstUCmW&X-Amz-Signature=e7715add539147a59e02949780ff5960eca677ee5db4b5eec3429213faa4b1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

