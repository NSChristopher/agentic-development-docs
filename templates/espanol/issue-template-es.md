# Plantilla de Issue

## Título
_¿Cuál es el título corto y descriptivo para este issue o funcionalidad?_

### Descripción
_Describe la funcionalidad o issue en detalle._

**Ejemplo Narrativo:**
Jane es una clienta frecuente que a menudo olvida lo que pidió la última vez. Cuando inicia sesión, debe ver una lista de sus pedidos anteriores, cada uno con detalles y un botón de "Volver a pedir". Esto le ayudará a repetir rápidamente compras pasadas, mejorando su experiencia y aumentando las ventas.
<small>(Solo ejemplo. Reemplaza con tu propia descripción y narrativa.)</small>

---

## Historias de Usuario Cubiertas
_¿Qué historias de usuario aborda este issue? Enumera por número y copia su texto de user-stories-template-es.md._

- US-001: Como cliente, quiero ver mis pedidos anteriores para recordar qué compré.  
- US-005: Como cliente, quiero ver los detalles de un pedido específico.  
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>

_Ve `user-stories-template-es.md`._

---

## Requisitos y Documentos de Apoyo
_¿Qué documentos o secciones apoyan este issue?_
- project-requirements-es.md, sección [sección o encabezado relevante]
- ui-wireframes-es.md, wireframes [1 y 2] para diseños y flujo
- database-schema-es.md, entidades: Pedido, Usuario
- api.md, endpoints: `/orders`, `/orders/{id}`
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>
---

## Criterios de Aceptación
_¿Qué debe ser cierto para que este issue se considere completo?_
- [ ] Todas las historias de usuario listadas arriba están completamente implementadas y testeables.
- [ ] La interfaz coincide con los wireframes proporcionados.
- [ ] Los datos se cargan desde el backend, usando el esquema y contratos API especificados.
- [ ] Gestiona correctamente los estados de carga, error y vacío.
- [ ] (Agrega cualquier criterio adicional relevante para esta funcionalidad.)
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>
---

## Dependencias
_¿Qué otros issues o funcionalidades deben completarse primero?_
- Depende de:
  - US-008: Autenticación de usuarios
  - US-010: Backend API de pedidos disponible  
    <small>(Solo ejemplo. Reemplaza según sea necesario.)</small>

---

## Stubbing y Mocks
_Si las dependencias no están listas, ¿qué stubs o datos mock se pueden usar para avanzar? Usa la documentación como contrato_

---

## Separación de Preocupaciones (¡Prevención de Conflictos de Fusión!)
_¿Qué partes de la base de código afectará este problema?_

## Directrices para guardar documentación
_*Esto debe estar presente y sin cambios en todos los problemas*_

¿Dónde se debe guardar la documentación?
- **Nuevas Funcionalidades**: Si se crea una nueva funcionalidad, documente la funcionalidad en un archivo Markdown y guárdelo dentro de la carpeta `external-docs/docs`. El nombre del archivo debe ser descriptivo de la funcionalidad (por ejemplo, `nombre-funcionalidad.md`).
- **Funcionalidades Editadas**: Si se edita una funcionalidad existente, localice el archivo Markdown correspondiente en la carpeta `external-docs/docs` y actualícelo con los cambios.

Pasos para Confirmar Cambios y Crear una Solicitud de Extracción

1. **Navegar al Repositorio de Documentos Externos**:
   - Asegúrese de estar trabajando dentro del repositorio `external-docs`.
   - cd en el repositorio anidado:
     ```bash
     cd external-docs
     ```

2. **Agregar o Editar Documentación**:
   - Para nuevas funcionalidades:
     - Cree un nuevo archivo Markdown en la carpeta `external-docs/docs`.
     - Escriba documentación detallada sobre la funcionalidad, incluyendo su propósito, funcionalidad e instrucciones de uso.
   - Para funcionalidades editadas:
     - Localice el archivo Markdown existente en la carpeta `external-docs/docs`.
     - Actualice el archivo con los cambios relevantes.

3. **Preparar los Cambios**:
   - Ejecute el siguiente comando para preparar los cambios:
     ```bash
     git add docs/
     ```

4. **Confirmar los Cambios**:
   - Use un mensaje de confirmación descriptivo para explicar los cambios:
     ```bash
     git commit -m "Agregar/Editar documentación para [nombre-funcionalidad]"
     ```

4. **Empujar los Cambios a una Nueva Rama**:
   - Cree una nueva rama para los cambios:
     ```bash
     git checkout -b actualizacion-doc-funcionalidad
     ```
   - Empuje la rama al repositorio remoto:
     ```bash
     git push -u origin actualizacion-doc-funcionalidad
     ```

## Notas
- Asegúrese de que toda la documentación sea clara, concisa y siga las pautas de formato del repositorio.
