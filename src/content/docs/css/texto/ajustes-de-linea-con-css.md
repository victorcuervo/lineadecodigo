---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAF7UBX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTFiS63fjzkTLhSYP2BeDdT9Ym1I27P8y%2FATQM7ujyXAiEA0Kof3q7SrBTfqaR%2B6wBYijuS8ryUEJomXOQCsN7xQdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BN%2FpEf0EymLJ%2B7NircA%2BLtjBCEHWFuBAV3iyRseDwWkCo%2BRelMyShCpue%2FD9A2oFfdR0Dq5gHl3wLgwXaMKADOQCdGzfg%2FREcDf9gq89JxeFCDN8vUzzIsUC6kAsrMKtX2idthVKE0BiFinEDlubLRFXnbxpwLn4V25HcFiW%2Fr5bkAGBCLNdJH2gO%2BtsKv%2FFMsu2U6DIwlM4vDn3LvV0kuzLnavauHI2I6W8oIv6%2BE7CaXZGbFX4gZhuGgYxgONpEu6DvFTsSDCZHAOOVtOPKGNvW30jE%2Fqvb9Hl%2BFzR3B%2BG5LbVF4ra%2F747010dKaWlUa5H3TEyhjzLf0cplu99sscs3dH8VChL2sdE%2B2n0sCBSGx%2BOYY34z4ztWLfdQuZ9Kvh0sxKfEetwr2zfw%2FYpeJBEyGJ3bt0LQ9StBz07tXjseAO1cfYLnwrlXh3lFgYVMQSp3%2FpxpOMhJ3RA7yLl575yW0ffLa%2BumQ2o%2FMcpNSbXBsylisoKlMrjSkqTBkayOBqFSQ1g%2FegN76ABYZTgY35m2aeqK1vPgjUqQtNQrO2BP83El2RIWegqxcoLDGIk0s26NfBuZTxE%2BvwuQC50%2BlN0qGR%2FZwgnmhEmKGYWRE99aBtefqajoBIRrXEJNEq67k9JNqf2Cf3WbOMOutjMoGOqUBDyNO4RJzng4nsU8BHxaFITiBKNplW4AG%2BBFWt3eZKbqvamxcg%2F32z11KLRfeCyHYdYpFV8VzfyUny%2F%2FywkguzjG3qChGB7WYl3EpQqf5UZEN2LGiAAHCZHT1H5JxaAHGO0N2x7H6oxj0QoYBGYYldmLQs8Z7Moqjv0pjVWtHAqNpuFhu3gdMSPXW1CLGu4K8kQwuo0%2Fp9f3exbfVsKPcS4q1qJ54&X-Amz-Signature=d0c3e232dcbc4d7a5ac028ba81fd2dc686de34a00d9d060c398a540f0eaeea28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAF7UBX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTFiS63fjzkTLhSYP2BeDdT9Ym1I27P8y%2FATQM7ujyXAiEA0Kof3q7SrBTfqaR%2B6wBYijuS8ryUEJomXOQCsN7xQdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BN%2FpEf0EymLJ%2B7NircA%2BLtjBCEHWFuBAV3iyRseDwWkCo%2BRelMyShCpue%2FD9A2oFfdR0Dq5gHl3wLgwXaMKADOQCdGzfg%2FREcDf9gq89JxeFCDN8vUzzIsUC6kAsrMKtX2idthVKE0BiFinEDlubLRFXnbxpwLn4V25HcFiW%2Fr5bkAGBCLNdJH2gO%2BtsKv%2FFMsu2U6DIwlM4vDn3LvV0kuzLnavauHI2I6W8oIv6%2BE7CaXZGbFX4gZhuGgYxgONpEu6DvFTsSDCZHAOOVtOPKGNvW30jE%2Fqvb9Hl%2BFzR3B%2BG5LbVF4ra%2F747010dKaWlUa5H3TEyhjzLf0cplu99sscs3dH8VChL2sdE%2B2n0sCBSGx%2BOYY34z4ztWLfdQuZ9Kvh0sxKfEetwr2zfw%2FYpeJBEyGJ3bt0LQ9StBz07tXjseAO1cfYLnwrlXh3lFgYVMQSp3%2FpxpOMhJ3RA7yLl575yW0ffLa%2BumQ2o%2FMcpNSbXBsylisoKlMrjSkqTBkayOBqFSQ1g%2FegN76ABYZTgY35m2aeqK1vPgjUqQtNQrO2BP83El2RIWegqxcoLDGIk0s26NfBuZTxE%2BvwuQC50%2BlN0qGR%2FZwgnmhEmKGYWRE99aBtefqajoBIRrXEJNEq67k9JNqf2Cf3WbOMOutjMoGOqUBDyNO4RJzng4nsU8BHxaFITiBKNplW4AG%2BBFWt3eZKbqvamxcg%2F32z11KLRfeCyHYdYpFV8VzfyUny%2F%2FywkguzjG3qChGB7WYl3EpQqf5UZEN2LGiAAHCZHT1H5JxaAHGO0N2x7H6oxj0QoYBGYYldmLQs8Z7Moqjv0pjVWtHAqNpuFhu3gdMSPXW1CLGu4K8kQwuo0%2Fp9f3exbfVsKPcS4q1qJ54&X-Amz-Signature=5ed9c45507612862abc2a78b5e327bdf04bf9eb66a3f0f6b35006909e76cd94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

