---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5K34XC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGwm%2Bz5qqAO748%2BNB3xtOJcrz0CshYfAudrY9Klny70gIhAOFXjMXNN7oY9RcPeYCDSp3N%2FX%2BmLaJdmJYsAOGNps01KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDt4NRgmYYwz33stkq3APPRdxTOilgrmxozOrZCcJ1Lx0IaAQHm2MSNRrCI%2Bf2sqCCj2%2Fq2LPGRwC7lokTLrxUlyzdFMeWskX%2FDkRCOt0j5euGTZB4ze92O9PB1vxb0f5h9mhneC%2Bh3UxedmiV09hnBkxP%2BFIodPH2l8xQfcFvqsLc2pSWvpf1ij2Ps4KigCn3owqX3WkFLeY8ujHJpnc7LSAShYi%2BTJIGtUxcQl2RGiy0dU2l8H%2FBgdBFfRpZZpEYCakFbDCiL1Cad2ukheAZE1Vwa2fRUIWn1vEYGTp5HCdi00PVlGRLiY6uY3wphUMkv4l0j4qAJhS57DYEoubzcClK58hAQpeoyWSB2zLFOsAnVibj5%2FfA3Yp9TzHq5Yip4U7aX5IEmewzEPJQloh1daiVvDkXjjpv%2BaVv00qvkYohf4eMCNUphG%2B7cVz%2F5Tq%2FR0M7JGxd54JeqqM%2FWy2NXEOfns69sXzMvJKVSPxDAl9jFtDZog2cIpeGqVwpnfxPSSfloSONv6g1RVqxuwfBRvVPXTxYfhDS%2F1S6X47aEESjJFWZAyzvEQDtPqcS4mI8Hp4jkgbOEDHYZ27AV%2BSgt1Her6Llo%2BxeVE6ShVdbIo6M%2FIcxzXdz9gnF%2ByHawcg1Xu3FBD%2BJqc9tojCzmdXJBjqkARRex99URrexz40xHDAGdTedlMATPLq7F%2Bzt5u5uVwZU9FtDCyDsMSb66L68dL2dSBJQG37w%2Bv7YYmfxXC1vF3rBGvwxPKGoTaQMQN6HvJy5YhnvZiJeZtLefZ9UqHXfkbNuO2ZRxLxiOwIVEYWWDizur2%2B8PqxQm1YL4LD%2BqDzUX9aW0T0jsMWFsDB6vxVkId%2BXBHuEeVrxShRAEAPOgmlm7aiJ&X-Amz-Signature=b61bd651aefe1df366fafd75c4b42c1ef0831beb43d9e7907054785c0260036c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5K34XC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGwm%2Bz5qqAO748%2BNB3xtOJcrz0CshYfAudrY9Klny70gIhAOFXjMXNN7oY9RcPeYCDSp3N%2FX%2BmLaJdmJYsAOGNps01KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDt4NRgmYYwz33stkq3APPRdxTOilgrmxozOrZCcJ1Lx0IaAQHm2MSNRrCI%2Bf2sqCCj2%2Fq2LPGRwC7lokTLrxUlyzdFMeWskX%2FDkRCOt0j5euGTZB4ze92O9PB1vxb0f5h9mhneC%2Bh3UxedmiV09hnBkxP%2BFIodPH2l8xQfcFvqsLc2pSWvpf1ij2Ps4KigCn3owqX3WkFLeY8ujHJpnc7LSAShYi%2BTJIGtUxcQl2RGiy0dU2l8H%2FBgdBFfRpZZpEYCakFbDCiL1Cad2ukheAZE1Vwa2fRUIWn1vEYGTp5HCdi00PVlGRLiY6uY3wphUMkv4l0j4qAJhS57DYEoubzcClK58hAQpeoyWSB2zLFOsAnVibj5%2FfA3Yp9TzHq5Yip4U7aX5IEmewzEPJQloh1daiVvDkXjjpv%2BaVv00qvkYohf4eMCNUphG%2B7cVz%2F5Tq%2FR0M7JGxd54JeqqM%2FWy2NXEOfns69sXzMvJKVSPxDAl9jFtDZog2cIpeGqVwpnfxPSSfloSONv6g1RVqxuwfBRvVPXTxYfhDS%2F1S6X47aEESjJFWZAyzvEQDtPqcS4mI8Hp4jkgbOEDHYZ27AV%2BSgt1Her6Llo%2BxeVE6ShVdbIo6M%2FIcxzXdz9gnF%2ByHawcg1Xu3FBD%2BJqc9tojCzmdXJBjqkARRex99URrexz40xHDAGdTedlMATPLq7F%2Bzt5u5uVwZU9FtDCyDsMSb66L68dL2dSBJQG37w%2Bv7YYmfxXC1vF3rBGvwxPKGoTaQMQN6HvJy5YhnvZiJeZtLefZ9UqHXfkbNuO2ZRxLxiOwIVEYWWDizur2%2B8PqxQm1YL4LD%2BqDzUX9aW0T0jsMWFsDB6vxVkId%2BXBHuEeVrxShRAEAPOgmlm7aiJ&X-Amz-Signature=e2bdb6c6cd2c7dea7dd5f890734d2ab506cc009dc722b379e3e61a583e7af5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

