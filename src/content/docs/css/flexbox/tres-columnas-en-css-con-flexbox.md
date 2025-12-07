---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6FW2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLzDYbuhYRPS1VUmjIVIIbXn2znbndJsTk6mE%2FsrAoEAiB2ahKSYcgmUFcG5U7Z4%2FEWbuuBWfV9OfQoEAmYvMVHqSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImWebKaIBu%2BA0cQoKtwDOib8jLXt8ex0ikA5kgjhb0knUAE7da2ZbWKDZRcpskhwV4Ul%2F2gFfdlmE2iJSAKqp701tvlj3bSQwPy5areyLzLP%2BNlslDufdHqsEatAN8Ss63Kbi0J2RBc%2B12%2FzBf6sAl2ORvVdaIe99Sqe0azUmkc6h5h8HYt0Kp%2BLFFo36mT%2BASYMj7zg3guIttiqgrMbMwI0gQF0xh5qCvtI5BnXSiSTdZJQhVFa%2F9QhsYWsUn5ayx8yiT1nC32SYDPUP6ajLaQL21y5eylc1okP0ijftcnW6%2FDuvmFtoAMF9VTvah%2F4q%2FPYmeAyOWkyAtMeKkSnTErwKJeD2aGylCDHDNTW%2F1fOjUDK8eIWIX7S1WNYdxE%2Ff%2F1cpF39R9iMYf3%2BdGypeDwgl279%2Ft7%2BVwAvjCS0YoDofmDOJn6%2FRsJsiTqtHGlbAXyISXwi3uPZ1%2FLhvwCYx3MQZZUNqvYPWRulU4DfstkhzCH14YgTABaElYTv6CBIh4JeZdPxvRk5NKStZYzQjae7JkhFoxVhigmwXgsu8ItHsL3P%2FQAY31%2F12h6Z54%2Fr4i3YhcwVcD%2BPfZPP1qRxClDbpc7we0puxNsyoq5URhOoTblcj%2FlLP17KoJ2v9mOCtNiy%2Fer2v%2FT9PNYw0MfXyQY6pgEv66S%2BLxt%2B%2F%2B%2B3iuo3IESE3Us%2BI%2FedPAwz5G9zSF6xWFMNJS4FUnznqsul74yVQO%2FGDNGXJjhJQP1xICv99OkQ2Y%2BPSKZB3HLLpjb%2BWakM35FL5AWxeHxW8J5zAMtiKddntLhph%2F5Q%2FLs1oBqO7K%2FHRkYxYdH77e%2BqrLq7eukhmSZezsWplITMnWtzAmpFXjRQ9I246SRxpni314ayg02lcy6rnTi5&X-Amz-Signature=4c130670c017956f99951eceb37539867289155ce77c6c1cf3040c889fcbdb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6FW2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLzDYbuhYRPS1VUmjIVIIbXn2znbndJsTk6mE%2FsrAoEAiB2ahKSYcgmUFcG5U7Z4%2FEWbuuBWfV9OfQoEAmYvMVHqSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImWebKaIBu%2BA0cQoKtwDOib8jLXt8ex0ikA5kgjhb0knUAE7da2ZbWKDZRcpskhwV4Ul%2F2gFfdlmE2iJSAKqp701tvlj3bSQwPy5areyLzLP%2BNlslDufdHqsEatAN8Ss63Kbi0J2RBc%2B12%2FzBf6sAl2ORvVdaIe99Sqe0azUmkc6h5h8HYt0Kp%2BLFFo36mT%2BASYMj7zg3guIttiqgrMbMwI0gQF0xh5qCvtI5BnXSiSTdZJQhVFa%2F9QhsYWsUn5ayx8yiT1nC32SYDPUP6ajLaQL21y5eylc1okP0ijftcnW6%2FDuvmFtoAMF9VTvah%2F4q%2FPYmeAyOWkyAtMeKkSnTErwKJeD2aGylCDHDNTW%2F1fOjUDK8eIWIX7S1WNYdxE%2Ff%2F1cpF39R9iMYf3%2BdGypeDwgl279%2Ft7%2BVwAvjCS0YoDofmDOJn6%2FRsJsiTqtHGlbAXyISXwi3uPZ1%2FLhvwCYx3MQZZUNqvYPWRulU4DfstkhzCH14YgTABaElYTv6CBIh4JeZdPxvRk5NKStZYzQjae7JkhFoxVhigmwXgsu8ItHsL3P%2FQAY31%2F12h6Z54%2Fr4i3YhcwVcD%2BPfZPP1qRxClDbpc7we0puxNsyoq5URhOoTblcj%2FlLP17KoJ2v9mOCtNiy%2Fer2v%2FT9PNYw0MfXyQY6pgEv66S%2BLxt%2B%2F%2B%2B3iuo3IESE3Us%2BI%2FedPAwz5G9zSF6xWFMNJS4FUnznqsul74yVQO%2FGDNGXJjhJQP1xICv99OkQ2Y%2BPSKZB3HLLpjb%2BWakM35FL5AWxeHxW8J5zAMtiKddntLhph%2F5Q%2FLs1oBqO7K%2FHRkYxYdH77e%2BqrLq7eukhmSZezsWplITMnWtzAmpFXjRQ9I246SRxpni314ayg02lcy6rnTi5&X-Amz-Signature=8c56077850e1a7ae75c94e6d2195931448a44d2175b334111782512b73ab6de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

