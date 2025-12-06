---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHPW5KC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHveedr1PAdW61TFUh0Ysl92OQKk8iMLCsPiCUcnpPSAIhAI3fjern%2BvxmW2z2ryafcIFYVkBr6GiX%2F0RZH1d8%2B37yKv8DCHAQABoMNjM3NDIzMTgzODA1IgzwkuUjYsNClQkOLEMq3AMAqyU%2B7H%2BXU%2BZnFCXiiCkRgkt87UHUDVaDuS%2F0ka5r%2FE5LXL%2BZYegM5E10mwDc4NAsH%2Fqpdyu9j13tWF3YsxNQjtTPsUoOhvukS7xkX88I26td8BijzEvciKClW1wRw4ycyM6gbuBhPoMAVDJ1FcXEPoyIjU4l%2FQV2hXXT68l%2FNha1ynla2SysbzDS3MC%2FyQnjoeu92Pe3K2EgFInjWd9iZqeaymRNMVLNSv43wKCAvyjCZaARW%2BbwVUx6VcmfflEB99CcVUt%2BX4C7qJ%2F%2BsmFHbdRDt1UKHanqxpYkpDFU3Sy%2BH5ufWRlkImmZnss3SUSgJMBchOdWuUgRhIzG5mx0MUeTouLfjjwAMWythN%2BhtKkm%2FcUxbThoKodL9pUR11ndiC%2Bo9hichzgkYlfj2iWNtNsCoLuHzVwSQ%2BqtVkonbZjpNDNeErZdvVnPl41aAQ0jtonpc3aVFJMgzTiE%2FGMxbII%2FCHTwCkrdZcE%2BpTN0IHegkkb447SHWoWqPSZVdrAqbiYPNAUPSK20NAY%2F89N3Bbo4lOOrRIP1z0E19fS3nhks3AckwrKkmSIOJDnYccZ8i%2F6Mag7E39Yy3AC8sqrbSjGzPoVR1Rs0lPjuDLfW7vWHD1v4vdEDwe%2BN%2BDDzns%2FJBjqkAY%2BaIYeV1vIZ7Pmu0z165KAWtVLsi50zvZubxY8pq3aNB19134JV9TTgDl5BOS6bCpwsRQv%2Ftycnz1ZmOi%2BcBg76sffeEgdSF%2Fz3fDpMOjJQ%2Bx4aSNqP17Ip1WBRX65si5gURb0cSFIpipd8XL4mU6NHsxtdD3f30tLTNdRexVFQubbek%2Ftz1baiWYPPJyhl2GFc%2Byn3%2BaIzR%2FEF6FxpXPmbCsPH&X-Amz-Signature=63a92b40bc485c8cb6fbe48657f27bb48cd08dddd3ae541aa6d40094919bfda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHPW5KC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHveedr1PAdW61TFUh0Ysl92OQKk8iMLCsPiCUcnpPSAIhAI3fjern%2BvxmW2z2ryafcIFYVkBr6GiX%2F0RZH1d8%2B37yKv8DCHAQABoMNjM3NDIzMTgzODA1IgzwkuUjYsNClQkOLEMq3AMAqyU%2B7H%2BXU%2BZnFCXiiCkRgkt87UHUDVaDuS%2F0ka5r%2FE5LXL%2BZYegM5E10mwDc4NAsH%2Fqpdyu9j13tWF3YsxNQjtTPsUoOhvukS7xkX88I26td8BijzEvciKClW1wRw4ycyM6gbuBhPoMAVDJ1FcXEPoyIjU4l%2FQV2hXXT68l%2FNha1ynla2SysbzDS3MC%2FyQnjoeu92Pe3K2EgFInjWd9iZqeaymRNMVLNSv43wKCAvyjCZaARW%2BbwVUx6VcmfflEB99CcVUt%2BX4C7qJ%2F%2BsmFHbdRDt1UKHanqxpYkpDFU3Sy%2BH5ufWRlkImmZnss3SUSgJMBchOdWuUgRhIzG5mx0MUeTouLfjjwAMWythN%2BhtKkm%2FcUxbThoKodL9pUR11ndiC%2Bo9hichzgkYlfj2iWNtNsCoLuHzVwSQ%2BqtVkonbZjpNDNeErZdvVnPl41aAQ0jtonpc3aVFJMgzTiE%2FGMxbII%2FCHTwCkrdZcE%2BpTN0IHegkkb447SHWoWqPSZVdrAqbiYPNAUPSK20NAY%2F89N3Bbo4lOOrRIP1z0E19fS3nhks3AckwrKkmSIOJDnYccZ8i%2F6Mag7E39Yy3AC8sqrbSjGzPoVR1Rs0lPjuDLfW7vWHD1v4vdEDwe%2BN%2BDDzns%2FJBjqkAY%2BaIYeV1vIZ7Pmu0z165KAWtVLsi50zvZubxY8pq3aNB19134JV9TTgDl5BOS6bCpwsRQv%2Ftycnz1ZmOi%2BcBg76sffeEgdSF%2Fz3fDpMOjJQ%2Bx4aSNqP17Ip1WBRX65si5gURb0cSFIpipd8XL4mU6NHsxtdD3f30tLTNdRexVFQubbek%2Ftz1baiWYPPJyhl2GFc%2Byn3%2BaIzR%2FEF6FxpXPmbCsPH&X-Amz-Signature=e6dcfd83dc0230a63c7ece2e5cba34b8013fb21a37ac83707214d8c611616285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

