---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7QYJU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICn%2Ba0rEgd5oDpSpjOMZcyyKEIRp%2BVtYV1z%2BCFp51o0%2BAiEAmfOKQK18blrELHrM9GWR3vG1ejQfr3b9HwAkZFi0sNoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh0cP%2FFK%2F2hh2ngJircAyHkZg0JS1wlByKH3Nps9MizWPU1sUZTP1scC%2Bx1d77O4kbp4Q9Bmam8EhNtLJjLhEo9lWOj8c%2BpjuFXpZF25uJpV%2BnTjuyTz8crUzVlg%2Fr2AZ4NU9Ly2XlNy8lV3i93cBsRrJ8ZkAeOsg0afHUr86wAOhHkeI1Ne0sO53CKkR7kTYysR01JBkIEsK87LKidVuNv2AsOmMU8vo%2BkNpORuiaZMueE2U2pkTJ95qgFr7NNOdZD1WYmu0mvm15bPl235HsXFXW9UdqqshTSwNhuqlnBS0HZ97ZArlCDp3pVKmJQtu7I9AlUeR7J8mBYPttHU8Ip6i6wNnh9lEFmwMXfue08tH4r%2BpHWHajWLlhho%2BkTN9wf8juyyJAMVJiwlOUMYUIqde9qznlkNQf7L1tKK%2F0w5lTq%2BanRlEZlFZzzdheRLr8VvT7lKFNrr0uBtyEob4%2B8ZzMIvbGTLBwHNsbvuuRVmPQFYIhDM3GcYS2Ph7zF5aMaobELE%2BTngYFHgvYjviiOVPooGtpLUVObD3NQwgn9OPNTsnrJLXaCOoeLiI9aMJ%2BrGMwhi23Vn1qVh5NixqKQPpyyVc0bV2CXN%2FlhlrcMDeWspzKcwaCMyoRGSqqPFzvw2XPaGp1Ob%2ForMIui3ckGOqUBRFVup76mrOOPsZipAGEKMSyAxMN%2FAHMqAxsCxev4Xffc8mqeUpQuVQY%2BP%2FrFcDii6Jsw2JGDtAZjdeZgskpbcOf1p7HiDyiQ4RQZh3eZqWwRvxyeSxtSDDOnSTX1Pe8F2UvvCyJMQLjAtAkbL1yMhCd4N%2Fylrwtysiwlhf1eS3spCkYuZRz9MCVLDcF5i2luPrpm00AIOg7hclGdeV8z7m0Bd%2FhX&X-Amz-Signature=0b67ffb700c47a390a6f83ce1ce2d4069b02deeda0cf3a7a27b476aee6025b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7QYJU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICn%2Ba0rEgd5oDpSpjOMZcyyKEIRp%2BVtYV1z%2BCFp51o0%2BAiEAmfOKQK18blrELHrM9GWR3vG1ejQfr3b9HwAkZFi0sNoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh0cP%2FFK%2F2hh2ngJircAyHkZg0JS1wlByKH3Nps9MizWPU1sUZTP1scC%2Bx1d77O4kbp4Q9Bmam8EhNtLJjLhEo9lWOj8c%2BpjuFXpZF25uJpV%2BnTjuyTz8crUzVlg%2Fr2AZ4NU9Ly2XlNy8lV3i93cBsRrJ8ZkAeOsg0afHUr86wAOhHkeI1Ne0sO53CKkR7kTYysR01JBkIEsK87LKidVuNv2AsOmMU8vo%2BkNpORuiaZMueE2U2pkTJ95qgFr7NNOdZD1WYmu0mvm15bPl235HsXFXW9UdqqshTSwNhuqlnBS0HZ97ZArlCDp3pVKmJQtu7I9AlUeR7J8mBYPttHU8Ip6i6wNnh9lEFmwMXfue08tH4r%2BpHWHajWLlhho%2BkTN9wf8juyyJAMVJiwlOUMYUIqde9qznlkNQf7L1tKK%2F0w5lTq%2BanRlEZlFZzzdheRLr8VvT7lKFNrr0uBtyEob4%2B8ZzMIvbGTLBwHNsbvuuRVmPQFYIhDM3GcYS2Ph7zF5aMaobELE%2BTngYFHgvYjviiOVPooGtpLUVObD3NQwgn9OPNTsnrJLXaCOoeLiI9aMJ%2BrGMwhi23Vn1qVh5NixqKQPpyyVc0bV2CXN%2FlhlrcMDeWspzKcwaCMyoRGSqqPFzvw2XPaGp1Ob%2ForMIui3ckGOqUBRFVup76mrOOPsZipAGEKMSyAxMN%2FAHMqAxsCxev4Xffc8mqeUpQuVQY%2BP%2FrFcDii6Jsw2JGDtAZjdeZgskpbcOf1p7HiDyiQ4RQZh3eZqWwRvxyeSxtSDDOnSTX1Pe8F2UvvCyJMQLjAtAkbL1yMhCd4N%2Fylrwtysiwlhf1eS3spCkYuZRz9MCVLDcF5i2luPrpm00AIOg7hclGdeV8z7m0Bd%2FhX&X-Amz-Signature=699e8c3c862eeb401cfbfbff4d76f0e7f633cfcd80c10b62a16b014d5d246ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

