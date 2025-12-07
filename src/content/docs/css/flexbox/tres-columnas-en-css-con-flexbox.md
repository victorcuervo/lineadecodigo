---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARP2IZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFagoQOUOXGTTr%2F%2ButMI26%2BoD%2BG3ItL8DWdqWdUQErIAiEA8rH4H7E3%2F2rnKjb%2FGe%2FDwhnBYZ929YPsR2ixnQkMBJkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOZAf1khIIDuAE8mCrcA3SL7IAWq37zF63wZF5H2WxJBHrUdxQH4gIUNJv0ZzMBmb3CzjUvmctcwN%2FlRv19TV3jQ%2Bjr6l5Fgp%2FhNQ1u%2BQu%2FwCaEGRchteyecNunPhie2cTjIpOmOx0FitkxyQXcFlACoQAvzFRmwk4vMRz5DOIWchqVkxc%2BTkmbsxB5WVfYK8eMvMQbsCy02zNySgeoIqQzMFA9NwPg0leOXqrY0z3gbgTlUc1ASiEVPJoUV22qfC9TzoLfhYSVvJ4olN7%2BCOkzgfeVHBysCCqMRXIlwDbRmTQKeTHibH5XPeqW02cSikbUlHCN1G4wR5RNIDhBWY8fgEul14WWdHmnZ0D8GXSmgwJYQHV4vp151CKB7TzEkZNEnkoeQfpWZc3xkmwsBfrNRsObNRsPMSE7sq2gwWBYNK9JnmUmopRpDdSF3t4gIJcWBrNAjvB5lLh4Bkiz%2ByGV8vr%2BJWN9tFM7%2B%2BCx%2FDwklMCKakfN8L6KsAL0vdX9dqIMjlWqR1%2BfCMC7lnRXobf5POq3GxOqUg%2FHPnsXkcNCXNXBTZycOOt2xbTO5OPuZTsPrnxPEn18Tw2ovt1qs6tsXJILLU6bYT2BV0QUpU1B0AVWwz9UXVmHLunf1cGDkiVAMZ81HR3nYggZMJWa1MkGOqUBXoh4auSLhm7eCaHHUpOTFP1f%2FWdZ3%2Fc3NStrFW3vLFjLkwbBi6F7DkNs5VFFJoWW%2BNH5Wu7GgxV%2FqwPq6cnlNxDtTQBmdhIu3sm5OQAnPN%2FT8tmLU8V973vsDClK3A9RI362QA7MB%2FktYMeYQJGol1TWxfU83n0lPWnz6cqMevAJqRGM3ixYTgvL3ZxJ6AwuepNR8UJP7UP9f4WqKCVizF9x2HXY&X-Amz-Signature=c73a6cde5713bb789ba1e07a511ba82a3d3a5659b2da8df1b1d82c6e92d7a1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARP2IZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFagoQOUOXGTTr%2F%2ButMI26%2BoD%2BG3ItL8DWdqWdUQErIAiEA8rH4H7E3%2F2rnKjb%2FGe%2FDwhnBYZ929YPsR2ixnQkMBJkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOZAf1khIIDuAE8mCrcA3SL7IAWq37zF63wZF5H2WxJBHrUdxQH4gIUNJv0ZzMBmb3CzjUvmctcwN%2FlRv19TV3jQ%2Bjr6l5Fgp%2FhNQ1u%2BQu%2FwCaEGRchteyecNunPhie2cTjIpOmOx0FitkxyQXcFlACoQAvzFRmwk4vMRz5DOIWchqVkxc%2BTkmbsxB5WVfYK8eMvMQbsCy02zNySgeoIqQzMFA9NwPg0leOXqrY0z3gbgTlUc1ASiEVPJoUV22qfC9TzoLfhYSVvJ4olN7%2BCOkzgfeVHBysCCqMRXIlwDbRmTQKeTHibH5XPeqW02cSikbUlHCN1G4wR5RNIDhBWY8fgEul14WWdHmnZ0D8GXSmgwJYQHV4vp151CKB7TzEkZNEnkoeQfpWZc3xkmwsBfrNRsObNRsPMSE7sq2gwWBYNK9JnmUmopRpDdSF3t4gIJcWBrNAjvB5lLh4Bkiz%2ByGV8vr%2BJWN9tFM7%2B%2BCx%2FDwklMCKakfN8L6KsAL0vdX9dqIMjlWqR1%2BfCMC7lnRXobf5POq3GxOqUg%2FHPnsXkcNCXNXBTZycOOt2xbTO5OPuZTsPrnxPEn18Tw2ovt1qs6tsXJILLU6bYT2BV0QUpU1B0AVWwz9UXVmHLunf1cGDkiVAMZ81HR3nYggZMJWa1MkGOqUBXoh4auSLhm7eCaHHUpOTFP1f%2FWdZ3%2Fc3NStrFW3vLFjLkwbBi6F7DkNs5VFFJoWW%2BNH5Wu7GgxV%2FqwPq6cnlNxDtTQBmdhIu3sm5OQAnPN%2FT8tmLU8V973vsDClK3A9RI362QA7MB%2FktYMeYQJGol1TWxfU83n0lPWnz6cqMevAJqRGM3ixYTgvL3ZxJ6AwuepNR8UJP7UP9f4WqKCVizF9x2HXY&X-Amz-Signature=63d5acd500a301c273deaf94ea42885b4ec2c8283a458f15e3e72c8771e0fea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

